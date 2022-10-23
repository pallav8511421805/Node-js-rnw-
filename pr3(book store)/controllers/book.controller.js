const books = require("../models/book");
const fs = require("fs");

const GETSTU = async function (req, res) {
  const books = await books.find()
  res.render('index', { data: books })
}

const CREATESTU = function (req, res) {
  res.render('create')
}

const CREATEPOST = async function (req, res) {
  const books = new books({ ...req.body, pname: req.file.filename })
  await books.save();
  res.redirect('index')
}

const EDIT = async (req, res) => {
  const books = await books.findById(req.query.id);
  res.render('edit', { books: books });
}

const UPDATES = async (req, res) => {
  const books = await books.findById(req.query.id);

  const data = req.body;
  const old_img = books.pname;
  if (req.file) {
    data["pname"] = req.file.filename;
  }

  await books.updateOne({ _id: req.query.id }, { $set: data });

  if (req.file) {
    fs.rm(__dirname + "/../public/uploads/" + old_img, () => {
    })
  }

  res.redirect('index');
}

const DELETE = async (req, res) => {
  const result = await books.deleteOne({ _id: req.query.id });
  res.redirect('index');
}
module.exports = {
  GETSTU,
  CREATESTU,
  CREATEPOST,
  EDIT,
  UPDATES,
  DELETE,
}