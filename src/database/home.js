import { getConnection } from './database'

const getAllMessages = async () => {
  try {
    const connection = await getConnection()
    const result = await connection.query(
      'Select id, title, message FROM message'
    )
    return result
  } catch (error) {
    console.log(error)
  }
}

const getOneMessage = async (messageId) => {
  try {
    const connection = await getConnection()
    const result = await connection.query(
      'Select id, title, message FROM message WHERE id = ?',
      messageId
    )
    return result
  } catch (error) {
    console.log(error)
  }
}

const createMessage = async ({ title, message }) => {
  try {
    const connection = await getConnection()
    const newMessage = { title, message }
    const result = await connection.query(
      'INSERT INTO message SET ? ',
      newMessage
    )
    return result
  } catch (error) {
    console.log('error', error)
  }
}

const updateMessage = async ({ messageId, title, message }) => {
  try {
    const connection = await getConnection()
    const result = await connection.query('UPDATE message SET ? WHERE id = ?', [
      { title, message },
      messageId
    ])
    return result
  } catch (error) {
    console.log(error)
  }
}

const deleteMessage = async (messageId) => {
  try {
    const connection = await getConnection()
    const result = await connection.query(
      'DELETE FROM message WHERE id = ?',
      messageId
    )
    return result
  } catch (error) {
    console.log(error)
  }
}

export const methods = {
  getAllMessages,
  getOneMessage,
  createMessage,
  updateMessage,
  deleteMessage
}
