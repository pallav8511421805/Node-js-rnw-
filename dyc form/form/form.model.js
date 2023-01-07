const Mongodb = require('mongoose')
const Category = Mongodb.model('categories', {
    name: String,
    parent_id: String,
})

module.exports = Category;