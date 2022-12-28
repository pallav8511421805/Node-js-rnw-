class Authcontroller {
    login(req, res) {
        res.render('login')
    }
    forgetpassword(req, res) {
        res.render('forgetpass')
    }
}
module.exports = Authcontroller;