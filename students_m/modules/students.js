const mongoose = require('mongoose');
const Students = mongoose.model('Students', { name: String,age:Number,fname:String });
module.exports = Students;