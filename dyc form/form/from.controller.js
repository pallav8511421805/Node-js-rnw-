const mongoose = require('mongoose');
const Category = require('../form/form.model')

const Getform = async (req, res) => {
    const getdata = await Category.find()
    const parentdata = getdata.filter((x) => x.parent_id === null);
    res.render('form', { parentdata })
}
const Postform = async (req, res) => {
    const { name, parent_id } = req.body;
    const category = new Category({
        name: name,
        parent_id: parent_id === '' ? null : mongoose.Types.ObjectId(parent_id)
    })
    category.save()
    res.redirect('/')
}
module.exports = {
    Getform,
    Postform,
}