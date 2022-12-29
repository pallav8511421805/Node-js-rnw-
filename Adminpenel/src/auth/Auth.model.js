const mongoose = require('mongoose');

const Auth = mongoose.model('Auth', {
    email: String,
    name: String,
    password: String,
})

module.exports = Auth;