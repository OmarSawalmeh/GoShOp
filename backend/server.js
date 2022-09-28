'use strict'
import express from 'express'
import dotenv from 'dotenv'
// DATABASE
import connectDB from './config/db.js'
// ROUTERS
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoute.js'
import orderRoutes from './routes/orderRoute.js'

// MIDDLEWARE
import { notFound, errorHandler} from './middleware/errorMiddleware.js'

dotenv.config()
connectDB()
const app = express()
app.use(express.json())


app.get('/', (req, res)=>{
   res.send('API is running...')
})

// Routes
app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)
app.use('/api/orders', orderRoutes)


// Middleware
app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))

