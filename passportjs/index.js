const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieparser = require('cookie-parser');
const appRoute = require('./routes');
const passport = require('passport');
const Auth = require('./models/auth');
const session = require('express-session');
const strategy = require('./utils/Strategy');
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

app.use(passport.initialize())
app.use(passport.session())

passport.use(strategy)

passport.serializeUser((user, done) => {
    if (user) {
        return done(null, user.id)
    } else {
        return done(null, false)
    }
})

passport.deserializeUser((id, done) => {
    Auth.findById(id, (err, user) => {
        if (err) {
            return done(null, false)
        } else {
            return done(null, user)
        }
    })
})

app.get('/', (req, res) => {
    res.render('index');
})

app.use(appRoute)

app.listen(port, () => {
    console.log(`server start on this server : http://localhost:${port}/`)
})