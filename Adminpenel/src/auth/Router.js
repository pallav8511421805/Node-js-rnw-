const express = require('express')
const Router = express.Router();
const Authcontroller = require('./auth.controller');
const authcontroller = new Authcontroller();
Router.get('/login', authcontroller.login)
Router.post('/login', authcontroller.loginpost)
Router.get('/fp', authcontroller.forgetpassword)
Router.get('/signup', authcontroller.signup)
Router.post('/signup', authcontroller.Resgister)
Router.get('/change', (req, res, next) => {
    const Session = req.session;
    if (Session.email) {
        next();
    } else {
        res.redirect('/auth/login')
    }
}, authcontroller.Changepassword)
Router.post('/change', authcontroller.Change_password)
module.exports = Router;