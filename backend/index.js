//Import libraries

const debug = require('debug')('backend:server')
const http = require('http')

//Import the app

const app = require('./app')

app.listen("8080")

module.exports = app
