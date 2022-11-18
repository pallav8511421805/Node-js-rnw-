class profilecontroller {
    constructor() { }

    gethome(req, res) {
        res.render('auth/login');
    }
}
module.exports = profilecontroller;