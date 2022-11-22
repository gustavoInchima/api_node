import { methods as messages } from '../database/home'

const getAllMessages = async () => messages.getAllMessages()

const getOneMessage = async (messageId) => messages.getOneMessage(messageId)

const createMessage = (newMessage) => messages.createMessage(newMessage)

const updateMessage = async (message) => messages.updateMessage(message)

const deleteMessage = async (messageId) => messages.deleteMessage(messageId)

export const services = {
  getAllMessages,
  getOneMessage,
  createMessage,
  updateMessage,
  deleteMessage
}
