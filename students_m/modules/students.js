const mongoose = require('mongoose');
const Students = mongoose.model('Students', { name: String,age:Number,fname:String,mname:String,fphone : Number });
module.exports = Students;