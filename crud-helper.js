require('dotenv').config()
require('./config/database')

// require all of theMongoose models

const User = require('./models/user')
// const Item = require('./models/item')
// const Category = require('./models/category')
// const Order = require('./models/order')

// local variables for holding retrieved documents
let user, item, category, order
let users, items, categorys, orders
