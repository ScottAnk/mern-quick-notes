const User = require('../../models/user')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

function createJWT(user) {
  return jwt.sign({ user }, process.env.SECRET, { expiresIn: '24h' })
}

async function create(req, res, next) {
  try {
    const user = await User.create(req.body)

    const token = createJWT(user)

    res.json(token)
  } catch (error) {
    res.status(400).json(error)
  }
}

async function login(req, res, next) {
  try {
    const user = await User.findOne({ email: req.body.email })
    if (!user) {
      res.sendStatus(401)
    }
    const passwordMatch = await bcrypt.compare(req.body.password, user.password)
    if (passwordMatch) {
      const token = createJWT(user)
      res.json(token)
    } else {
      res.sendStatus(401)
    }
  } catch (error) {
    res.status(400).json(error)
  }
}

function checkToken(req, res) {
  console.log('req.users', req.user)
  res.json(req.exp)
}

module.exports = { create, login, checkToken }
