const express = require('express')

const Authcontroller = require('../controller/auth.controller');

const Route = express.Router();

const Authentication = new Authcontroller();

Route.get('/signup', Authentication.signup);

Route.post('/signup', Authentication.register);

module.exports = Route;