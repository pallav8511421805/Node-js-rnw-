const express = require('express')
const app = express()
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const appRoute = require('./routes');
const books = require('./models/book');
const port = 3000;

mongoose.connect('mongodb://localhost:27017/store');

app.set("view engine", "ejs")

const options = {
    index: false,
}

app.get("/search", async function (req, res) {

    if (req.query.search) {
        const book = await books.find({ $or: [{ title: { '$regex': req.query.search } }, { aname: { '$regex': req.query.search } }] })
        res.render('books/index', { data: book });
    }
})

app.get("/", async function (req, res) {
    res.render('home')
})

app.use(express.static('public', options))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(appRoute)

app.listen(port, () => {
    console.log(`http://localhost:${port}/`)
})