function ensureLoggedIn(req, res, next) {
  if (!req.user) {
    return res.status(401).json('Unauthorized')
  }
  return next()
}

module.exports = ensureLoggedIn
