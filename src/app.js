import express from 'express'
import morgan from 'morgan'
// Routes
import homeRoutes from './routes/home.routes'

// App
const app = express()

// Settings

// Middlewares
app.use(morgan('dev'))
app.use(express.json())

// Routes
app.use('/api/home', homeRoutes)

export default app
