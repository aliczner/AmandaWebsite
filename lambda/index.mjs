const SCORE_THRESHOLD = 0.6;

function json(statusCode, bodyObj, extraHeaders = {}) {
  return {
    statusCode,
    headers: {
      'Content-Type': 'application/json',
      ...extraHeaders,
    },
    body: JSON.stringify(bodyObj),
  };
}

export const handler = async (event) => {
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
  };

  // Preflight
  if (event.requestContext?.http?.method === 'OPTIONS') {
    return { statusCode: 200, headers: corsHeaders, body: 'OK' };
  }

  try {
    // Parse body first
    const body = JSON.parse(event.body || '{}');
    const {
      name = '',
      email = '',
      message = '',
      recaptchaToken: token,
      recaptchaAction: action,
      address, // honeypot
    } = body;

    // Honeypot (server-side)
    if (address && String(address).trim() !== '') {
      return json(400, { ok: false, reason: 'honeypot' }, corsHeaders);
    }

    // Basic validation (server-side)
    if (!name || !email || !message) {
      return json(400, { ok: false, reason: 'missing_fields' }, corsHeaders);
    }
    if (message.length > 2000) { // mirror your client max
      return json(400, { ok: false, reason: 'message_too_long' }, corsHeaders);
    }

    // reCAPTCHA token required
    if (!token) {
      return json(400, { ok: false, reason: 'missing_token' }, corsHeaders);
    }

    // Verify with Google
    const verifyResp = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        secret: process.env.CAPTCHA_SECRET_KEY,
        response: token,
        // optional: remoteip if available
      }),
    });
    const result = await verifyResp.json();

    const hostnameOk = !result.hostname || result.hostname.endsWith('amandaliczner.ca');
    const actionOk = !action || result.action === 'contact_submit';
    const scoreOk = (result.score ?? 0) >= SCORE_THRESHOLD;
    const freshEnough =
      !result.challenge_ts || (Date.now() - Date.parse(result.challenge_ts) <= 2 * 60 * 1000);

    const passed = result.success === true && hostnameOk && actionOk && scoreOk && freshEnough;

    if (!passed) {
      return json(
        403,
        {
          ok: false,
          reason: 'recaptcha_failed',
          details: { score: result.score, action: result.action, errors: result['error-codes'] },
        },
        corsHeaders
      );
    }

    // Send email via SES SMTP
    const nodemailer = await import('nodemailer');
    const transporter = nodemailer.default.createTransport({
      host: 'email-smtp.ca-central-1.amazonaws.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.SES_USERNAME,
        pass: process.env.SES_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      replyTo: { name, address: email },
      subject: 'Amanda Website - Contact Form Submission',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });

    return json(200, { message: 'Email sent successfully' }, corsHeaders);
  } catch (error) {
    console.error('Error:', error);
    return json(500, { message: 'Failed to send email' }, corsHeaders);
  }
};
