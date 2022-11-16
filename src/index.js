import app from './app'
import config from './config'

const main = () => {
  app.listen(config.port)
  console.log(`Server available at http://localhost:${config.port}`)
}

main()
