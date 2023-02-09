require('dotenv').config()
require('./config/database')

// require all of theMongoose models

// const User = require('./models/User')
// const Item = require('./models/Item')
// const Category = require('./models/Category')
// const Order = require('./models/Order')

// local variables for holding retrieved documents
let user, item, category, order
let users, items, categorys, orders
