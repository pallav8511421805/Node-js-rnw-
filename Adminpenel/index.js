const express = require('express');
const Body = require('body-parser');
const app = express();
const port = 5000;
const AppRouter = require('./Router');
const path = require('path');
const Mongodb = require('mongoose')

Mongodb.connect('mongodb://localhost:27017/ADMINPANEL')

app.use(express.static('public'))
app.set('views', [path.join(__dirname + '/src/Dashbroad', 'views'),
path.join(__dirname + '/src/Profile', 'views'),
path.join(__dirname + '/src/auth', 'views'),
path.join(__dirname + '/src', 'views')
])

app.use(Body.json())
app.use(Body.urlencoded({ extended: false }))
app.set('view engine', 'ejs')

app.use(AppRouter)

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})
