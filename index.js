const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const routes = require('./router')

require('dotenv').config()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(__dirname + '/public'))
app.use(express.static(__dirname + '/views'))

app.get('/', function (req, res) {
    res.send("index.html")
})

app.use('/api/todos', routes
)

app.listen(process.env.PORT, function (req, res) {
    console.log("This server is running")
})