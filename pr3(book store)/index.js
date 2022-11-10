const express = require('express')
const app = express()
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const appRoute = require('./routes');
const books = require('./models/book');
const session = require('express-session');
const cookieparser = require('cookie-parser');
const port = 3000;

mongoose.connect('mongodb://localhost:27017/store');

app.set("view engine", "ejs")

const options = {
    index: false,
}

app.get("/", async function (req, res) {
    res.render('home')
})

app.use(express.static('public', options))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))



app.use(cookieparser())

const oneday = 1000 * 60 * 60 * 24;

app.use(session({
    secret: 'this is secret key.',
    cookie: { maxAge: oneday }
}))

app.use(appRoute)

app.listen(port, () => {
    console.log(`http://localhost:${port}/`)
})