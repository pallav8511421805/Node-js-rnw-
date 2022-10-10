const express = require('express')
const app = express()
const mongoose = require('mongoose');
const port = 3000;
const bodyParser = require("body-parser");
const User = require("./modules/user");
mongoose.connect('mongodb://localhost:27017/user');

app.set("view engine" ,"ejs")

const options = {
    index : false,
}
app.use(express.static('public' ,options))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

app.get('/', async function (req, res) {
    const user = await User.find()
    res.render('index',{ data : user})
  })

app.get('/create', function (req, res) {
    res.render('create')
  })
  
app.post('/create', async function (req, res) {
      const user = new User(req.body)
      await user.save();
      res.redirect('/')
})

app.listen(port,()=>{
    console.log(`http://localhost:${port}/`)
})