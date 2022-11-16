const Auth = require('../models/auth');

class Authcontroller {
    constructor() { }

    signup(req, res) {
        res.render('auth/signup');
    }

    async register(req, res) {
        const user = new Auth({
            ...req.body
        })
        await user.save()
        res.redirect('/')
    }

    login(req, res) {
        res.render('auth/login');
    }
}

module.exports = Authcontroller;