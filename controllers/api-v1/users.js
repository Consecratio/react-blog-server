const router = require('express').Router()
const db = require('../../models')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

// GET - /users -- test api endpoints
router.get('/', (req, res) => {
    res.json({ msg: 'Hi! The user endpoint is okay.' })
})

// POST - /users/register -- CREATE a new user
router.post('/register', async (req, res) => {
    try {
        // check if the user exists already
        const findUser = await db.User.findOne({
            email: req.body.email
        })

        // if the user is found -- don't let them register
        if(findUser) return res.status(400).json({ msg: 'User already exists' })

        // hash password from req.body

        // create our new user

        // create the jwt payload

        // sign the jwt and send a response
        
    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: 'Internal server error' })
    }
})

// POST - /user/login -- validate login credentials

// GET - /auth-locked -- will redirect if a bad jwt is found

module.exports = router