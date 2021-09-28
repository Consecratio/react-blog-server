require('dotenv').config()
const db = require('./models')
db.connect() // test the db connection