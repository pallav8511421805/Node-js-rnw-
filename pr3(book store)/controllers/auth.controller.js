const Auth = require('../models/auth');

class Authcontroller {
    constructor() { }

    signup(req, res) {
        res.render('Auth/Signup');
    }
}

module.exports = Authcontroller;