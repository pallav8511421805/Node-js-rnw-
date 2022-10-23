const express = require('express')
const Route = express.Router();

const stuRoute = require('../routes/stu.route')

Route.use('/stu',stuRoute)

module.exports = Route;