const mongoose = require('mongoose');
const Category = require('../form/form.model')
const Getform = async (req, res) => {
    const getdata = await Category.find()
    const parentdata = getdata.filter((x) => x.parent_id === '');
    res.render('form', { parentdata })
}
const Postform = async (req, res) => {
    const category = new Category({ ...req.body })
    category.save()
    res.redirect('/')
}
module.exports = {
    Getform,
    Postform,
}