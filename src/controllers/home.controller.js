import { services as homeServices } from '../services/home.service'

const getAllMessages = async (req, res) => {
  const allMessages = await homeServices.getAllMessages()
  res.json(allMessages)
}

const getOneMessage = async (req, res) => {
  const { messageId } = req.params
  const message = await homeServices.getOneMessage(messageId)
  res.status(200).send({ status: 'OK', data: message })
}

const createMessage = (req, res) => {
  const { title, message } = req.body

  if (!title || !message) {
    res.status(500).json({ error: 'These was an error' })
  }

  const newMessage = { title, message }
  const createdMessage = homeServices.createMessage(newMessage)
  res.status(201).send({ status: 'OK', data: createdMessage })
}

const updateMessage = async (req, res) => {
  const { messageId } = req.params
  const { title, message } = req.body

  console.log(messageId, title, message)
  const updateMessage = await homeServices.updateMessage({
    id: messageId,
    title,
    message
  })
  res.status(200).send({ status: 'OK', data: updateMessage })
}

const deleteMessage = async (req, res) => {
  // const { messageId } = req.params
  console.log(req.params.messageId)

  const deleteMessage = await homeServices.deleteMessage(req.params.messageId)
  res.status(200).send({ status: 'OK', data: deleteMessage })
}

export const methods = {
  getAllMessages,
  getOneMessage,
  createMessage,
  updateMessage,
  deleteMessage
}
