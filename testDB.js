require('dotenv').config()
const db = require('./models')
db.connect() // test the db connection

const dbTest = async () => {
    try {
        // CREATE
        // const newUser = new db.User({
        //     name: 'Oliver Cromwell',
        //     email: 'o@c.com',
        //     password: 'oliver'
        // })

        // await newUser.save()
        // console.log('New User: ', newUser)

        // READ -- at login
        const foundUser = await db.User.findOne({
            name: 'Oliver Cromwell'
        })

        console.log('Found User: ', foundUser)

    } catch (error) {
        console.log(error)
    }
}

dbTest()