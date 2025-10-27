import express from 'express'
import { productsRouter } from './routes/products.js'
import { authRouter } from './routes/auth.js'

const app = express()
const PORT = 8000

app.use(express.json())
 
app.use(express.static('public'))

app.use('/api/products', productsRouter)
app.use('/api/auth', authRouter)
 
app.listen(PORT, () => { 
  console.log(`Server running at http://localhost:${PORT}`)
}).on('error', (err) => {
  console.error('Failed to start server:', err)
}) 