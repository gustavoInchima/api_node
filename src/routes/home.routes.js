import { Router } from 'express'
import { methods as homeController } from '../controllers/home.controller'

const router = Router()

router
  .get('/', homeController.getAllMessages)
  .get('/:messageId', homeController.getOneMessage)
  .post('/', homeController.createMessage)
  .put('/:messageId', homeController.updateMessage)
  .delete('/:messageId', homeController.deleteMessage)

export default router
