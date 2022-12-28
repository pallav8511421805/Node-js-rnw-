class Authcontroller {
    login(req, res) {
        res.render('login')
    }
    loginpost(req, res) {
        console.log(req.body)
    }
    forgetpassword(req, res) {
        res.render('forgetpass')
    }
    signup(req, res) {
        res.render('signup')
    }
}
module.exports = Authcontroller;