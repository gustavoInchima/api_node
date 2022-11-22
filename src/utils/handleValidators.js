import { validationResult } from 'express-validator'

const validateResults = (req, res, next) => {
  try {
    validationResult(req).throw()
    return next() //  continue to controller
  } catch (error) {
    res.status(403)
    res.send({ errors: error.array() })
  }
}

module.exports = validateResults
