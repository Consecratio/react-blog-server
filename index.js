const express = require('express')
const rowdy = require('rowdy-logger')

const app = express()
const rowdyResults = rowdy.begin(app)

const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send('Hello, world!')
})

app.listen(PORT, () => {
    rowdyResults.print()
    console.log(`Listening on port: ${PORT}`)
})