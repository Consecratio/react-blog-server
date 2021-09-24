// require the mongoose package
const mongoose = require('mongoose')

// connection function
const connect = () => {
    const MONGODB_URI = process.env.MONGODB_URI
    console.log(MONGODB_URI)
}

// export the connection function and models