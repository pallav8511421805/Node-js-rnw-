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
        const { invalid } = req.query;
        res.render('Auth/Login', { invalid })
    }

    async authdata(req, res) {
        console.log(req)
        const Authuser = await Auth.findOne(req.body)
        if (Authuser) {
            const session = req.session;
            session.UId = Authuser._id;
            session.UName = Authuser.name;
            res.redirect('/Profile')
        } else {
            res.redirect('/login?invalid=true')
        }
    }
}

module.exports = Authcontroller;