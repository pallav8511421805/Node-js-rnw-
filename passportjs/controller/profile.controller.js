class profilecontroller {
    constructor() { }

    gethome(req, res) {
        res.render('profile/index');
    }
}
module.exports = profilecontroller;