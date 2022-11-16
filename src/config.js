import { config } from 'dotenv'

config()

export default {
  host: process.env.HOST || '',
  database: process.env.DATABASE || '',
  user: process.env.USER || '',
  password: process.env.PASSWORD || '',
  port: process.env.SERVER_PORT || 3000
}
