const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieparser = require('cookie-parser');
const appRoute = require('./routes');
const passport = require('passport');
const session = require('express-session');
const strategy = require('./utils/Strategy');
const port = 3000;

mongoose.connect('mongodb://localhost:27017/passport');

app.use(passport.initialize())
app.use(passport.session())

app.use(strategy)

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

app.get('/', (req, res) => {
    res.render('index');
})

app.use(appRoute)

app.listen(port, () => {
    console.log(`server start on this server : http://localhost:${port}/`)
})