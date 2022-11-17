const LocalStrategy = require('passport-local');
const Auth = require('../models/auth');

const strategy = new LocalStrategy(function verify(username, password, cb) {
    Auth.findOne({
        username: username,
        password: password,
    })
        .then((Authuser) => {
            console.log('Authuser', Authuser)
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