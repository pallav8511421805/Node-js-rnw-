const mongoose = require('mongoose');
const Students = mongoose.model('Students', { name: String,age:Number,status:String });
module.exports = Students;