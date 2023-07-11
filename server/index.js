const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
var bodyParser = require('body-parser')
const morgan = require('morgan')
const dotenv = require('dotenv')
const app = express()

const port = 5000

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
// cors
app.use(cors())
// morgan
app.use(morgan("common"))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})