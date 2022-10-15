const express = require('express')
const app = express()
const mongoose = require('mongoose');
const port = 3000;
const bodyParser = require("body-parser");
const multer = require("multer");
const Students = require("./modules/students");
mongoose.connect('mongodb://localhost:27017/school');

app.set("view engine" ,"ejs")

const options = {
    index : false,
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '/public/uploads')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix)
  }
})

const upload = multer({ storage: storage })

app.use(express.static('public' ,options))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

app.get('/', async function (req, res) {
    const Student = await Students.find()
    res.render('index',{ data : Student})
  })

app.get('/create', function (req, res) {
    res.render('create')
  })
  
app.post('/create', async function (req, res) {
      const Student = new Students(req.body)
      await Student.save();
      res.redirect('/')
})

app.get('/edit', async (req, res) => {
  const Student = await Students.findById(req.query.id);
  res.render('edit', { Students: Student });
});
app.post("/edit", async (req, res) => {
  await Students.updateOne({ _id: req.query.id }, { $set: req.body });
  res.redirect('/');
});

app.get("/delete", async (req, res) => {
  const result = await Students.deleteOne({ _id: req.query.id });
  res.redirect('/');
})

app.listen(port,()=>{
    console.log(`http://localhost:${port}/`)
})