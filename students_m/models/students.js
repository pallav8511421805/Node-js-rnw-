const mongoose = require('mongoose');
const Students = mongoose.model('Students', { name: String,age:Number,fname:String,mname:String,fphone : Number ,gender : String,pname:String});
module.exports = Students;