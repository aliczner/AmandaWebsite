import type { APIRoute } from 'astro'
import nodemailer from 'nodemailer'

export const POST: APIRoute = async ({ request }) => {
  const data = await request.formData()
  const name = data.get('name')
  const email = data.get('email')
  const message = data.get('message')

  if (!name || !email || !message) {
    return new Response(
      JSON.stringify({ error: 'Missing required fields' }),
      { status: 400 }
    )
  }

  const transporter = nodemailer.createTransport({
    host: 'email-smtp.ca-central-1.amazonaws.com',
    port: 587,
    secure: false, // use TLS
    auth: {
      user: process.env.SES_USERNAME,
      pass: process.env.SES_PASSWORD,
    }
  })
  
  try {
    await transporter.sendMail({
      from: process.env.SES_EMAIL, 
      to: process.env.SES_EMAIL, 
      subject: 'Amanda Liczner Website - Contact Form Submission',
      text: message.toString(),
    })

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
    })
  } catch (err) {
    console.error('Email error:', err)
    return new Response(
      JSON.stringify({ error: 'Failed to send email' }),
      { status: 500 }
    )
  }
}
