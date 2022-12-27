const express = require('express')
const Router = express.Router();
const DashbroadRouter = require('./src/Dashbroad/Router')
Router.use('/', DashbroadRouter)
module.exports = Router;