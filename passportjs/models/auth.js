const mongoose = require('mongoose');

const Auth = mongoose.model('Auth', {
    name: String,
    password: String,
    email: String,
});

module.exports = Auth;