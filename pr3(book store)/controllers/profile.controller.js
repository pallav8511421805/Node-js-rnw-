
class profilecontroller {
    constructor() { }

    getprofile(req, res) {
        const session = req.session;
        res.render('Profile', { session });
    }

    logout(req, res) {
        req.session.destroy(() => {
            res.redirect('/login')
        });
    }
}

module.exports = profilecontroller;