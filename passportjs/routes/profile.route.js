const express = require('express')
const profilecontroller = require('../controller/profile.controller');

const Route = express.Router();

const profile = new profilecontroller();

Route.get('/', profile.gethome);


module.exports = Route;