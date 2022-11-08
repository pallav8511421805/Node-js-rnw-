const Auth = require('../models/auth');

class Authcontroller {
    constructor() { }

    signup(req, res) {
        res.render('Auth/Signup');
    }

    async register(req, res) {
        const employee = new Auth({
            ...req.body
        })
        await employee.save()
        res.redirect('/login')
    }

    login(req, res) {
        res.render('Auth/Login')
    }

    async authdata(req, res) {
        const Authuser = await Auth.findOne(req.body)
        console.log('Authuser : ', Authuser)
        res.redirect('/login')
    }
}

module.exports = Authcontroller;