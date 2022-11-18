const express = require('express')
const Route = express.Router();

const authRoute = require('./auth.route')
const ProfileRoute = require('./profile.route')

Route.use('/', (req, res, next) => {
    const User = req.user;
    if (User.name) {
        res.redirect('/profile')
    } else {
        next();
    }
}, authRoute)
Route.use('/profile', (req, res, next) => {
    const User = req.user;
    if (User.name) {
        next();
    } else {
        res.redirect('/login')
    }
}, ProfileRoute)

module.exports = Route;