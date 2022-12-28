class Authcontroller {
    login(req, res) {
        res.render('login')
    }
    loginpost(req, res) {
        const { email, password } = req.body;

        const memail = 'pallav@gmail.com';
        const mpass = '123456';

        if (memail === email && mpass === password) {
            res.redirect('/')
        } else {
            res.redirect('/auth/login')
        }
    }
    forgetpassword(req, res) {
        res.render('forgetpass')
    }
    signup(req, res) {
        res.render('signup')
    }
}
module.exports = Authcontroller;