const express = require('express')
const Route = express.Router();

const authRoute = require('./auth.route')

Route.use('/', authRoute)

module.exports = Route;