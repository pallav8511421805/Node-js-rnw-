const express = require('express')
const Router = express.Router();
const Authcontroller = require('./auth.controller');
const authcontroller = new Authcontroller();
Router.get('/login', authcontroller.index)
module.exports = Router;