const jwt = require('jsonwebtoken')
const db = require('../../models')

const authLockedRoute = async (req, res, next) => {
    try {
        // get the jwt from authorization headers

        // verify the jwt -- if the jwt is not valid will throw to catch

        // find the user from the db

        // mout the user on the res.locals
    } catch (error) {
        console.log(error)
    }
}

module.exports = authLockedRoute