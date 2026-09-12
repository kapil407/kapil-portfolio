import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import mongoose from 'mongoose'
import connectDb from './DB/ConnectDB.js'
import { portfolioProfile } from './data/profile.js'
import ContactMessage from './models/ContactMessage.js'
import { sendContactEmail } from './services/mailService.js'

dotenv.config()

const app = express()
const port = process.env.PORT || 1000
const allowedOrigins = (
  process.env.CLIENT_ORIGIN || 'http://127.0.0.1:5173,http://localhost:5173'
)
  .split(',')
  .map((origin) => origin.trim())

app.use(
  cors({
    origin: allowedOrigins,
    methods: ['GET', 'POST'],
  }),
)
app.use(express.json({ limit: '10kb' }))

app.get('/api/health', (_req, res) => {
  res.status(200).json({
    status: 'ok',
    database:
      mongoose.connection.readyState === 1 ? 'connected' : 'not_configured',
    service: 'portfolio-api',
  })
})

app.get('/api/profile', (_req, res) => {
  res.status(200).json(portfolioProfile)
})

app.post('/api/contact', async (req, res) => {
  const { name, email, subject, message } = req.body

  if (!name?.trim() || !email?.trim() || !subject?.trim() || !message?.trim()) {
    return res.status(400).json({ message: 'Please complete all fields.' })
  }

  if (!isValidEmail(email)) {
    return res.status(400).json({ message: 'Please enter a valid email address.' })
  }

  const payload = {
    name: name.trim(),
    email: email.trim().toLowerCase(),
    subject: subject.trim(),
    message: message.trim(),
  }

  if (mongoose.connection.readyState === 1) {
    await ContactMessage.create(payload)
  } else {
    console.info('Contact message received without database connection:', payload)
  }

  await sendContactEmail(payload)

  return res.status(201).json({
    message: 'Thanks for reaching out. Your message has been received.',
  })
})

app.use((_req, res) => {
  res.status(404).json({ message: 'Route not found.' })
})

app.use((error, _req, res, _next) => {
  console.error('Server error:', error)
  res.status(500).json({ message: 'Something went wrong. Please try again later.' })
})

connectDb().finally(() => {
  app.listen(port, () => {
    console.log(`Portfolio API running on Port ${port}`)
  })
})

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}
