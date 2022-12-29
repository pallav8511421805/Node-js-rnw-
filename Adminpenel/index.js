const express = require('express');
const Body = require('body-parser');
const app = express();
const port = 5000;
const AppRouter = require('./Router');
const path = require('path');
const Mongodb = require('mongoose')
const Session = require('express-session')
const COOKIE = require('cookie-parser')
Mongodb.connect('mongodb://localhost:27017/ADMINPANEL')

app.use(express.static('public'))
app.set('views', [path.join(__dirname + '/src/Dashbroad', 'views'),
path.join(__dirname + '/src/Profile', 'views'),
path.join(__dirname + '/src/auth', 'views'),
path.join(__dirname + '/src', 'views')
])

app.use(Body.json())
app.use(Body.urlencoded({ extended: false }))

app.use(Session({ secret: 'This is secret.', cookie: { maxAge: 1000 * 60 * 60 * 24 } }))
app.use(COOKIE())
app.set('view engine', 'ejs')

app.use(AppRouter)

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})
