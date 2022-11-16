const express = require('express')
const Route = express.Router();

const authRoute = require('./auth.route')
const profileRoute = require('./profile.route')

Route.use('/profile', profileRoute)

Route.use('/', authRoute)

module.exports = Route;