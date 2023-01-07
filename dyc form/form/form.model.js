const Mongodb = require('mongoose')
const Category_Schema = new Mongodb.Schema({
    name: {
        type: String,
        default: null
    },
    parent_id: {
        type: String,
        default: null
    },
})
const Category = Mongodb.model('categories', Category_Schema)

module.exports = Category;