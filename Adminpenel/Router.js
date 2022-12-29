const express = require('express')
const Router = express.Router();
const DashbroadRouter = require('./src/Dashbroad/Router')
const ProfileRouter = require('./src/Profile/Router')
const AuthRouter = require('./src/auth/Router')
const Authverify = (req, res, next) => {
    const session = req.session;
    if (session.email) {
        next()
    } else {
        res.redirect('/auth/login')
    }
}
Router.use('/auth', AuthRouter)
Router.use('/', Authverify, DashbroadRouter)
Router.use('/profile', Authverify, ProfileRouter)
module.exports = Router;