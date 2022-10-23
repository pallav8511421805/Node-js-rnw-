const mongoose = require('mongoose');
const books = mongoose.model('Books', { name: String, age: Number, fname: String, mname: String, fphone: Number, gender: String, pname: String });
module.exports = books;