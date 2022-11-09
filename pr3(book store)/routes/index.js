const express = require('express')
const Route = express.Router();

const bookRoute = require('./book.route')
const authRoute = require('./auth.route')
const profileRoute = require('./profile.route')

Route.use('/', (req, res, next) => {
    const session = req.session;
    if (session.userName) {
        next();
    } else {
        res.redirect('/login')
    }
}, profileRoute)

Route.use('/books', bookRoute)

Route.use('/', (req, res, next) => {
    const session = req.session;
    if (session.userName) {
        res.redirect('/Profile')
    } else {
        next();
    }
}, authRoute)

module.exports = Route;