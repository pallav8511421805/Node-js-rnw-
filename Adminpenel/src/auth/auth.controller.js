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
    Changepassword(req, res) {
        res.render('Change')
    }
    async Change_password(req, res) {
        const { email, password } = req.body;
        await Auth.updateOne({ email }, { $set: { password: password } }).then((respo) => {
            if (respo) {
                res.redirect('/')
            }
        })
    }
    signup(req, res) {
        const { exits } = req.query;
        res.render('signup', { exits })
    }
    Resgister(req, res) {
        const getdata = Auth.findOne(req.body).then(async (respo) => {
            if (respo) {
                res.redirect(`/auth/signup?exits=${true}`)
            } else {
                const data = req.body;
                const Authdata = new Auth(data)
                await Authdata.save().then((respo) => {
                    if (respo) {
                        res.redirect('/auth/login')
                    }
                })
            }
        })
    }
}
module.exports = Authcontroller;