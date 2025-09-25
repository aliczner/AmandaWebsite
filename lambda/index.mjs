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

const json = (status, body) => ({
  statusCode: status,
  headers: { 'Content-Type': 'application/json', ...corsHeaders },
  body: JSON.stringify(body),
});

export const handler = async (event) => {
  // CORS preflight for Function URL
  if (event.requestContext?.http?.method === 'OPTIONS') {
    return { statusCode: 204, headers: corsHeaders, body: '' };
  }

  try {
    const body = JSON.parse(event.body || '{}');

    // Honeypot (server-side)
    if (body.address2 && String(body.address2).trim() !== '') {
      return json(400, { ok: false, reason: 'honeypot' });
    }

    // Basic validation
    if (!body.name || !body.email || !body.message) {
      return json(400, { ok: false, reason: 'missing_fields' });
    }

    // reCAPTCHA verification
    const token  = body.recaptchaToken;
    const action = body.recaptchaAction;
    if (!token) return json(400, { ok: false, reason: 'missing_token' });

    const verifyResp = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        secret: process.env.CAPTCHA_SECRET_KEY, // use PROD secret in prod
        response: token,
      }),
    });
    const result = await verifyResp.json();

    // Allowlist hosts by env
    const ENV = process.env.NODE_ENV || 'production';
    const PROD_HOSTS = ['amandaliczner.ca', 'www.amandaliczner.ca'];
    const DEV_HOSTS  = ['localhost', '127.0.0.1'];
    const allowed = ENV === 'production' ? PROD_HOSTS : [...PROD_HOSTS, ...DEV_HOSTS];

    const hostnameOk = !!result.hostname && allowed.some(h =>
      result.hostname === h || result.hostname.endsWith('.' + h)
    );

    const actionOk    = result.action === 'contact_submit';
    const scoreOk     = (result.score ?? 0) >= 0.6;
    const freshEnough = !result.challenge_ts ||
      (Date.now() - Date.parse(result.challenge_ts) <= 2 * 60 * 1000);

    const passed = result.success === true && hostnameOk && actionOk && scoreOk && freshEnough;

    if (!passed) {
      // log to help debug 403s
      console.log('reCAPTCHA fail', {
        success: result.success, score: result.score, action: result.action,
        hostname: result.hostname, errors: result['error-codes']
      });
      return json(403, {
        ok: false, reason: 'recaptcha_failed',
        details: { score: result.score, action: result.action, hostname: result.hostname }
      });
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
