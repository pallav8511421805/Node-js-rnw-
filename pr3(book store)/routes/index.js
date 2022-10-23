const express = require('express')
const Route = express.Router();

const bookRoute = require('./book.route')

Route.use('/book', bookRoute)

module.exports = Route;