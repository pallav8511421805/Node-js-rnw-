const mongoose = require('mongoose');

const Auth = mongoose.model('Auth', {
    name: String,
    username: String,
    password: String,
});

module.exports = Auth;