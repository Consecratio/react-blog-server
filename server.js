require('dotenv').config()
// required for server
const express = require('express')
const cors = require('cors')
const rowdy = require('rowdy-logger')

// configure express app
const app = express()
const rowdyResults = rowdy.begin(app)
const PORT = process.env.PORT || 3001

// middlewares
app.use(cors())
app.use(express.urlencoded({ extended: false })) // for parsing http form requests
app.use(express.json()) // for the request body parser

app.get('/', (req, res) => {
    res.send('Hello, world!')
})

// listen on a port
app.listen(PORT, () => {
    rowdyResults.print()
    console.log(`Listening on port: ${PORT}`)
})