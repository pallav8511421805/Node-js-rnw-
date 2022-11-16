const express = require('express');
const app = express();
const mongoose = require('mongoose');
const session = require('express-session')
const port = 3000;

mongoose.connect('mongodb://localhost:27017/passport');

app.set("view engine", "ejs")

const options = {
    index: false,
}
app.use(express.static('public', options))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(cookieparser())

const oneday = 1000 * 60 * 60 * 24;

app.use(session({
    secret: 'this is secret key.',
    cookie: { maxAge: oneday },
}))

app.listen(port, () => {
    console.log(`server start on this server : ${port}`)
})