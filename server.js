const express = require('express')
const path = require('path')
const favicon = require('serve-favicon')
const logger = require('morgan')

require('dotenv').config()
require('./config/database')
const app = express()
const PORT = process.env.PORT || 3001

app.use(logger('dev'))
app.use(express.json())

//configure the serve-favicon and static middleware to serve from the production 'build' folder

app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')))
app.use(express.static(path.join(__dirname, 'build')))
app.get('/*', (req, res, next) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})
