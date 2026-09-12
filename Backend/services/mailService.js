import nodemailer from 'nodemailer'

const requiredMailConfig = [
  'SMTP_HOST',
  'SMTP_PORT',
  'SMTP_USER',
  'SMTP_PASS',
  'MAIL_TO',
]

export async function sendContactEmail({ name, email, subject, message }) {
  if (!isMailConfigured()) {
    console.info('SMTP is not configured. Skipping email notification.')
    return null
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })

  return transporter.sendMail({
    from: `"Portfolio Contact" <${process.env.MAIL_FROM || process.env.SMTP_USER}>`,
    to: process.env.MAIL_TO,
    replyTo: email,
    subject: `Portfolio Contact: ${subject}`,
    text: buildTextEmail({ name, email, subject, message }),
    html: buildHtmlEmail({ name, email, subject, message }),
  })
}

function isMailConfigured() {
  return requiredMailConfig.every((key) => Boolean(process.env[key]))
}

function buildTextEmail({ name, email, subject, message }) {
  return [
    'New portfolio contact message',
    '',
    `Name: ${name}`,
    `Email: ${email}`,
    `Subject: ${subject}`,
    '',
    'Message:',
    message,
  ].join('\n')
}

function buildHtmlEmail({ name, email, subject, message }) {
  return `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #0f172a;">
      <h2 style="margin-bottom: 12px;">New portfolio contact message</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
      <p><strong>Message:</strong></p>
      <div style="white-space: pre-line; border-left: 4px solid #10b981; padding-left: 14px;">
        ${escapeHtml(message)}
      </div>
    </div>
  `
}

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;')
}
