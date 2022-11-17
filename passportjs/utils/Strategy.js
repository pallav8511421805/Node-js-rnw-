const LocalStrategy = require('passport-local');
const Auth = require('../models/auth');

const strategy = new LocalStrategy((username, password, cb) => {
    Auth.findOne({
        username: username,
        password: password,
    })
        .then((Authuser) => {
            if (Authuser) {
                cb(null, Authuser)
            } else {
                cb(null, false, { message: 'Incorrect email and password.' })
            }
        }).catch((err) => {
            cb(err);
        })
});
module.exports = strategy;