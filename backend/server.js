import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js' // when using ES in node it is mandatory to add .js extension
import { notFound, errorHandler } from './middleware/errorMiddleware.js'

import productRoutes from './routes/productRoutes.js'

dotenv.config()

connectDB()

const app = express()

app.get('/', (req, res) => {
  res.send('API Working')
})

app.use('/api/products', productRoutes)

app.use(notFound)

app.use(errorHandler)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Server runnning in ${process.env.NODE_ENV} mode on port ${PORT}`)
})