const httpError = (res, message = 'error', code = 403) => {
  res.status(code).json({
    success: 0,
    message: message
  })
}

module.exports = { httpError }
