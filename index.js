// required for server
const express = require('express')
const rowdy = require('rowdy-logger')

// configure express app
const app = express()
const rowdyResults = rowdy.begin(app)
const PORT = process.env.PORT || 3001

// middlewares
// body parser
app.use(express.urlencoded({ extended: false }))
app.use(express.json()) // for the request body

app.get('/', (req, res) => {
    res.send('Hello, world!')
})

app.listen(PORT, () => {
    rowdyResults.print()
    console.log(`Listening on port: ${PORT}`)
})