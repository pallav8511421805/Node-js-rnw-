class profilecontroller {
    constructor() { }

    gethome(req, res) {
        const user = req.user;
        res.render('profile/index', { user });
    }

    logout(req, res) {
        req.logout(function (err) {
            if (err) { return next(err); }
            res.redirect('/login');
        });
    }
}
module.exports = profilecontroller;