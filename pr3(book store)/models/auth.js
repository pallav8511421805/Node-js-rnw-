const mongoose = require('mongoose');

const Auth = mongoose.model('Authentication', {
    name: String,
    password: String,
    email: String,
});

module.exports = Auth;