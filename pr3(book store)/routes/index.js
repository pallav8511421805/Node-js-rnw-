const express = require('express')
const Route = express.Router();

const bookRoute = require('./book.route')
const authRoute = require('./auth.route')

Route.use('/books', bookRoute)

Route.use('/', authRoute)

module.exports = Route;