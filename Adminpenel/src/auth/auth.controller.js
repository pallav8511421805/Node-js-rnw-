const Auth = require('./Auth.model');

class Authcontroller {
    login(req, res) {
        const { invalid } = req.query;
        res.render('login', { invalid })
    }
    async loginpost(req, res) {
        const Session = req.session;
        const { email, password } = req.body;
        const getdata = await Auth.findOne(req.body).then((responsce) => {
            if (responsce.email === email && responsce.password === password) {
                Session.email = responsce.email;
                res.redirect('/')
            } else {
                res.redirect(`/auth/login?invalid=${true}`)
            }
        });
    }
    forgetpassword(req, res) {
        res.render('forgetpass')
    }
    signup(req, res) {
        res.render('signup')
    }
    async Resgister(req, res) {
        const data = req.body;
        const Authdata = new Auth(data)
        await Authdata.save().then((respo) => {
            if (respo) {
                res.redirect('/auth/login')
            }
        })
    }
}
module.exports = Authcontroller;