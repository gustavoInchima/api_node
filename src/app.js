import express from 'express'
import morgan from 'morgan'
// Routes
import homeRoutes from './routes/home.routes'
import authRoutes from './routes/auth.routes'

// App
const app = express()

// Settings

// Middlewares
app.use(morgan('dev'))
app.use(express.json())

// Routes
app.use('/api/home', homeRoutes)
app.use('/api/', authRoutes)

export default app
