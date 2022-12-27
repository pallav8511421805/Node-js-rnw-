const express = require('express')
const Router = express.Router();
const Dashboradcont = require('../Dashbroad/Dashbroad.controller');
const dashboradcont = new Dashboradcont();
Router.get('/', dashboradcont.index)
module.exports = Router;