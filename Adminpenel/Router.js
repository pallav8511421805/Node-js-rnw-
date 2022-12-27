const express = require('express')
const Router = express.Router();
const DashbroadRouter = require('./src/Dashbroad/Router')
const ProfileRouter = require('./src/Profile/Router')
Router.use('/', DashbroadRouter)
Router.use('/profile', ProfileRouter)
module.exports = Router;