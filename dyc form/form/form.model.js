const mongoose = require('mongoose');
const main_srcam = {
    name: String,
    parent_id: null | mongoose.Schema.Types.ObjectId
};
const Category = mongoose.model('categories', main_srcam)

module.exports = Category;