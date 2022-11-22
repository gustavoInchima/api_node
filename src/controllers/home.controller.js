import { matchedData } from 'express-validator'
import { services as homeServices } from '../services/home.service'
import { httpError } from '../utils/handleError'

const getAllMessages = async (req, res) => {
  try {
    const allMessages = await homeServices.getAllMessages()
    res.json(allMessages)
  } catch (error) {
    httpError(res, 'ERROR_LIST_MESSAGES')
  }
}

const getOneMessage = async (req, res) => {
  try {
    const { messageId } = req.params
    const message = await homeServices.getOneMessage(messageId)
    res.status(200).send({ status: 'OK', data: message })
  } catch (error) {
    httpError(res, 'ERROR_GET_MESSAGE')
  }
}

const createMessage = (req, res) => {
  try {
    const newMessage = matchedData(req)
    const createdMessage = homeServices.createMessage(newMessage)
    res.status(201).send({ status: 'OK', data: createdMessage })
  } catch (error) {
    httpError(res, 'ERROR_CREATE_MESSAGES')
  }
}

const updateMessage = async (req, res) => {
  try {
    const { messageId } = req.params
    const { title, message } = req.body
    const updateMessage = await homeServices.updateMessage({
      messageId,
      title,
      message
    })
    res.status(200).send({ status: 'OK', data: updateMessage })
  } catch (error) {
    httpError(res, 'ERROR_UPDATE_MESSAGES')
  }
}

const deleteMessage = async (req, res) => {
  try {
    const { messageId } = req.params
    const deleteMessage = await homeServices.deleteMessage(messageId)
    res.status(200).send({ status: 'OK', data: deleteMessage })
  } catch (error) {
    httpError(res, 'ERROR_DELETE_MESSAGES')
  }
}

export const methods = {
  getAllMessages,
  getOneMessage,
  createMessage,
  updateMessage,
  deleteMessage
}
