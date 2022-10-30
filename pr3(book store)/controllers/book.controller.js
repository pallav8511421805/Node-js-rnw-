const books = require("../models/book");
const fs = require("fs");



const SEARCH = async function (req, res) {

  if (req.query.search) {

    const book = await books.find({ $or: [{ title: { '$regex': req.query.search } }, { aname: { '$regex': req.query.search } }] }, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.render('pages/index', { data: data });
      }
    })
  }
}

const GETSTU = async function (req, res) {

  let page = 1;
  if (req.query.page) {
    page = req.query.page;
  }

  const limit = 3;

  const book = await books.find()
    .limit(limit * 1).skip((page - 1) * limit).exec();

  const counting = await books.find().countDocuments();
  res.render('books', { data: book, totalpage: Math.ceil(counting / limit), curruntpage: page })
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
  const old_img = book.pname;
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
  SEARCH,
  GETSTU,
  CREATESTU,
  CREATEPOST,
  EDIT,
  UPDATES,
  DELETE,
}