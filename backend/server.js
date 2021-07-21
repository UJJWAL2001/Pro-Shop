import express from 'express'
import dotenv from 'dotenv'
import products from './data/products.js'
import connectDB from './config/db.js' // when using ES in node it is mandatory to add .js extension

dotenv.config()

connectDB()

const app = express()

app.get('/', (req, res) => {
  res.send('API Working')
})

app.get('/api/products', (req, res) => {
  res.json(products)
})

app.get('/api/products/:id', (req, res) => {
  const product = products.find((p) => p._id === req.params.id)
  res.json(product)
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Server runnning in ${process.env.NODE_ENV} mode on port ${PORT}`)
})
