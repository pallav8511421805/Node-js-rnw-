const mongoose = require('mongoose');

const Auth = mongoose.model('Auth', {
    name: String,
    username: String,
    email: String,
});

module.exports = Auth;