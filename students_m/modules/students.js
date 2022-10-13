const mongoose = require('mongoose');
const Students = mongoose.model('Students', { name: String,age:Number,fname:String,mname:String });
module.exports = Students;