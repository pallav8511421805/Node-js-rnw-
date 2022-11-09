
class profilecontroller {
    constructor() { }

    getprofile(req, res) {
        const session = req.session;
        console.log('sessionname', session.userName)
        res.render('Profile', { session });
    }

    logout(req, res) {
        req.session = null;
        req.session.destroy();
        res.redirect('/login')
    }
}

module.exports = profilecontroller;