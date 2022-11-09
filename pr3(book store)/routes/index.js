const express = require('express')
const Route = express.Router();

const bookRoute = require('./book.route')
const authRoute = require('./auth.route')
const profileRoute = require('./profile.route')

Route.use('/', (req, res, next) => {
    const session = req.session;
}, profileRoute)

Route.use('/books', bookRoute)

Route.use('/', authRoute)

module.exports = Route;