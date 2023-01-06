const express = require('express')
const app = express();
const Mongodb = require('mongoose')
const port = 3000;

Mongodb.connect('mongodb://localhost:27017')

Mongodb.set('strictQuery', true)


app.listen(port, () => {
    console.log('http://localhost:' + port)
})