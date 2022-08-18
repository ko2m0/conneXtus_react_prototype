const PORT = 8000

const express = require('express')
const { MongoClient } = require('mongodb')


const app = express()

app.get('/', (req, res) => {
    res.json("Hello conenxtus")
})

app.get('/signup', (req, res) => {
    res.json("Hello conenxtus")
})

app.listen(PORT, () => console.log("server runnig on PORT " + PORT))
