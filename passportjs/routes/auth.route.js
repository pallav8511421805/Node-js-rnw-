const express = require('express')
const passport = require('passport');
const Authcontroller = require('../controller/auth.controller');

const Route = express.Router();

const Authentication = new Authcontroller();

Route.get('/signup', Authentication.signup);

Route.post('/signup', Authentication.register);

Route.get('/login', Authentication.login)

Route.post('/login', passport.authenticate('local', { failureRedirect: '/login', failureMessage: true, }),
    function (req, res) {
        res.redirect('/');
    });

module.exports = Route;