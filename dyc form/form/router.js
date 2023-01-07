const express = require('express')
const Router = express.Router();
const { Getform, Postform } = require('./from.controller')
Router.get('/', Getform)
Router.post('/', Postform)
module.exports = Router;