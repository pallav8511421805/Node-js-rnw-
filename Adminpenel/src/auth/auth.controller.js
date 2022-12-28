class Authcontroller {
    login(req, res) {
        res.render('login')
    }
    forgetpassword(req, res) {
        res.render('forgetpass')
    }
    signup(req, res) {
        res.render('signup')
    }
}
module.exports = Authcontroller;