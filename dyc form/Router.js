const express = require('express')
const Router = express.Router();
const homeRouter = require('./form/router')
Router.use('/', homeRouter)
module.exports = Router;