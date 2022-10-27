const mongoose = require('mongoose');
const books = mongoose.model('Books', { title: String, aname: String, rate: Number, bookg: String, price: Number, fphone: Number, gender: String, pname: String });
module.exports = books;