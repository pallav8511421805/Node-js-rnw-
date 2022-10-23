const express = require('express')
const Route = express.Router();

const bookRoute = require('./book.route')

Route.use('/books', bookRoute)

module.exports = Route;