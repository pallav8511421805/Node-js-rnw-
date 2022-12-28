const express = require('express')
const Router = express.Router();
const DashbroadRouter = require('./src/Dashbroad/Router')
const ProfileRouter = require('./src/Profile/Router')
const AuthRouter = require('./src/auth/Router')
Router.use('/', DashbroadRouter)
Router.use('/profile', ProfileRouter)
Router.use('/auth', AuthRouter)
module.exports = Router;