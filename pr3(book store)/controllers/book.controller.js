const books = require("../models/book");
const fs = require("fs");

const GETSTU = async function (req, res) {
  const book = await books.find()
  res.render('books', { data: book })
}

const CREATESTU = function (req, res) {
  res.render('books/create')
}

const CREATEPOST = async function (req, res) {
  const book = new books({ ...req.body, pname: req.file.filename })
  await book.save();
  res.redirect('/books')
}

const EDIT = async (req, res) => {
  const book = await books.findById(req.query.id);
  res.render('books/edit', { books: book });
}

const UPDATES = async (req, res) => {
  const book = await books.findById(req.query.id);

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

  res.redirect('/books');
}

const DELETE = async (req, res) => {
  const result = await books.deleteOne({ _id: req.query.id });
  res.redirect('/books');
}
module.exports = {
  GETSTU,
  CREATESTU,
  CREATEPOST,
  EDIT,
  UPDATES,
  DELETE,
}