const mongoose = require('mongoose');
const books = mongoose.model('Books', { title: String, aname: String, rate: Number, bookg: String, price: Number,pname: String });
module.exports = books;