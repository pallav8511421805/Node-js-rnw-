const express = require('express')
const app = express()
const mongoose = require('mongoose');
const port = 3000;
const bodyParser = require("body-parser");

mongoose.connect('mongodb://localhost:27017/school');

app.set("view engine" ,"ejs")

const options = {
    index : false,
}

app.use(express.static('public' ,options))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

app.listen(port,()=>{
    console.log(`http://localhost:${port}/`)
})