const express = require('express')
const Router = express.Router();
const Authcontroller = require('./auth.controller');
const authcontroller = new Authcontroller();
Router.get('/login', authcontroller.login)
Router.post('/login', authcontroller.loginpost)
Router.get('/fp', authcontroller.forgetpassword)
Router.get('/signup', authcontroller.signup)
Router.post('/signup', authcontroller.Resgister)
module.exports = Router;