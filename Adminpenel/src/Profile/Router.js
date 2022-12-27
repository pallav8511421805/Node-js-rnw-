const express = require('express')
const Router = express.Router();
const Profilecont = require('../Profile/Profile.controller');
const profilecont = new Profilecont();
Router.get('/', profilecont.index)
module.exports = Router;