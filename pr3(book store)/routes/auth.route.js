const express = require('express')

const Authcontroller = require('../controllers/auth.controller');

const Route = express.Router();

const Authentication = new Authcontroller();

Route.get('/signup', Authentication.signup);

Route.post('/signup', Authentication.register);

Route.get('/login', Authentication.login);

Route.post('/login', Authentication.authdata);

module.exports = Route;