class Authcontroller {
    login(req, res) {
        const { invalid } = req.query;
        res.render('login', { invalid })
    }
    loginpost(req, res) {
        const { email, password } = req.body;

        const memail = 'pallav@gmail.com';
        const mpass = '123456';

        if (memail === email && mpass === password) {
            res.redirect('/')
        } else {
            res.redirect(`/auth/login?invalid=${true}`)
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