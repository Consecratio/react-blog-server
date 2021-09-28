require('dotenv').config()
const db = require('./models')
db.connect() // test the db connection

const dbTest = async () => {
    try {
        
    } catch (error) {
        console.log(error)
    }
}