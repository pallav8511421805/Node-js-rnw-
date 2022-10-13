const mongoose = require('mongoose');
const Users = mongoose.model('Users', { name: String,age:Number,status:String });
module.exports = Users;