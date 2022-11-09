const express = require('express')

const profilecontroller = require('../controllers/profile.controller');

const Route = express.Router();

const profile = new profilecontroller();

Route.get('/', profile.getprofile);

Route.get('/logout', profile.logout);

module.exports = Route;