class profilecontroller {
    constructor() { }

    gethome(req, res) {
        res.render('profile/home');
    }
}
module.exports = profilecontroller;