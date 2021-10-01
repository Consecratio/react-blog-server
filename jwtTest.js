const jwt = require('jsonwebtoken')

const jwtTest = () => {
    try {
        // USER LOGIN PROCESS
        // create the data payload
        const payload = {
            name: 'Weston',
            id: 5
        }

        // signing the jwt
        const token = jwt.sign(payload, 'This is my secret', { expiresIn: 60 * 60 })
        console.log(token)

        // REQUEST TO SERVER
        // decode the incoming jwt

    } catch (error) {
        console.log(error)
    }
}

jwtTest()