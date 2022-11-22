import { check } from 'express-validator'
import validateResults from '../utils/handleValidators'

const validatorCreateMessage = [
  check('title').exists().notEmpty().isLength({ max: 125 }),
  check('message').exists().notEmpty().isLength({ max: 125 }),
  (req, res, next) => {
    return validateResults(req, res, next)
  }
]

module.exports = { validatorCreateMessage }
