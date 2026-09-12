import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config();
const connectDb = async () => {
  const mongoUri = process?.env?.MONGO_URI
  // console.log(mongoUri)

  if (!mongoUri) {
    console.info('MONGO_URI is not set. Contact messages will be logged instead of saved.')
    return null
  }

  try {
    const connection = await mongoose.connect(mongoUri)
    console.log(`MongoDB connected: ${connection.connection.host}`)
    return connection
  } catch (error) {
    console.error('MongoDB connection failed:', error.message)
    return null
  }
}

export default connectDb
