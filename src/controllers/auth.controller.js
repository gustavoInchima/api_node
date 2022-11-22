import { services as homeServices } from '../services/home.service'
import { httpError } from '../utils/handleError'

const login = (req, res) => {
  try {
    res.json({ msg: 'login' })
  } catch (error) {
    httpError(res, error)
  }
}

const register = (req, res) => {
  try {
    res.json({ msg: 'register' })
  } catch (error) {
    httpError(res, error)
  }
}

export const methods = {
  login,
  register
}
