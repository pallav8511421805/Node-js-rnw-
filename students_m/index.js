const express = require('express')
const app = express()
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const appRoute = require('./routes')
const session = require('express-session')
const port = 3005;

mongoose.connect('mongodb://localhost:27017/school');

app.set("view engine", "ejs")

const options = {
    index: false,
}

app.use(session({ secret: 'this is secret key.', cookie: { maxAge: 60000 } }))

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