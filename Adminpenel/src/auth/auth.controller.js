const Auth = require('./Auth.model');

class Authcontroller {
    login(req, res) {
        const { invalid } = req.query;
        res.render('login', { invalid })
    }
    async loginpost(req, res) {
        const Session = req.session;
        const { email, password } = req.body;
        const getdata = await Auth.findOne({ email, password })

        if (getdata) {
            Session.email = email;
            res.redirect('/')
        } else {
            res.redirect(`/auth/login?invalid=${true}`)
        }
    }
    forgetpassword(req, res) {
        res.render('forgetpass')
    }

    async forgetpasswordpost(req, res) {
        const { email } = req.body;
        console.log(email)
    }
    Changepassword(req, res) {
        res.render('Change')
    }
    async Change_password(req, res) {
        const { email, password } = req.body;
        const findlogin = await Auth.findOne({ email })

        if (findlogin) {
            await Auth.updateOne({ email }, { $set: { password: password } }).then((respo) => {
                if (respo) {
                    res.redirect('/')
                }
            })
        } else {
            res.redirect('/auth/login')
        }
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