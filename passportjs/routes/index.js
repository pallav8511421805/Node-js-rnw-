const express = require('express')
const Route = express.Router();

const authRoute = require('./auth.route')
const ProfileRoute = require('./profile.route')

Route.use('/', authRoute)
Route.use('/profile', ProfileRoute)

module.exports = Route;