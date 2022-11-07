const books = require("../models/book");
const fs = require("fs");


const limit = 3;

const GETSTU = async function (req, res) {
  let page = 0;
  if (req.query && req.query['page']) {
    page = parseInt(req.query['page']);
    page = page <= 0 ? 0 : page - 1;
  }

  const searchdata = {};
  if (req.query && req.query['bookg']) {
    searchdata['bookg'] = { $regex: '.*' + req.query['bookg'] + '.*' }
  };

  const book = await books.find(searchdata)
    .limit(limit).skip(limit * page);

  const counting = await books.count(searchdata);

  const totalpages = Math.ceil(counting / limit);

  res.render('books', { data: book, totalpage: totalpages, curruntpage: page + 1, query: req.query })

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
  GETSTU,
  CREATESTU,
  CREATEPOST,
  EDIT,
  UPDATES,
  DELETE,
}