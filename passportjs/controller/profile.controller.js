class profilecontroller {
    constructor() { }

    getprofile(req, res) {
        const session = req.session;
        res.render('profile', { session });
    }
}

module.exports = profilecontroller;