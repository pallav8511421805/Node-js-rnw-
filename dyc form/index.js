const express = require('express')
const app = express();
const Mongodb = require('mongoose')
const port = 3000;
const path = require('path')
const AppRouter = require('./Router')
const bodyparser = require('body-parser')
Mongodb.connect('mongodb://localhost:27017/category_db')
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname + '/form', 'views'))
app.use(express.static('public', { index: false }))
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: false }))
app.use(AppRouter)
app.listen(port, () => {
    console.log('http://localhost:' + port)
})