export const handler = async (event) => {
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS'
  };

  // Handle preflight requests
  if (event.requestContext?.http?.method === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: corsHeaders,
      body: 'OK'
    };
  }

  try {
    const nodemailer = await import('nodemailer');
    const body = JSON.parse(event.body);
    console.log('Event received:', JSON.stringify(event, null, 2));

    const transporter = nodemailer.default.createTransport({
      host: 'email-smtp.ca-central-1.amazonaws.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.SES_USERNAME,
        pass: process.env.SES_PASSWORD
      }
    });

    await transporter.sendMail({
      from: process.env.SES_EMAIL,
      to: process.env.SES_EMAIL,
      subject: 'Amanda Website - Contact Form Submission',
      text: `Name: ${body.name}\nEmail: ${body.email}\nMessage: ${body.message}`
    });

    return {
      statusCode: 200,
      headers: {
        ...corsHeaders,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message: 'Email sent successfully' })
    };
  } catch (error) {
    console.error('Error sending email:', error);
    return {
      statusCode: 500,
      headers: {
        ...corsHeaders,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message: 'Failed to send email' })
    };
  }
};
