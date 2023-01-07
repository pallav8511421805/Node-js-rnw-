const Mongodb = require('mongoose')
const Category = Mongodb.model('categories', {
    name: {
        type: String,
        default: null
    },
    parent_id: {
        type: String,
        default: null
    },
})

module.exports = Category;