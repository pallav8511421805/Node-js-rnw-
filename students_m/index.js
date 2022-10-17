const express = require('express')
const app = express()
const mongoose = require('mongoose');
const port = 3000;
const bodyParser = require("body-parser");
const fs = require("fs");
const multer = require("multer");
const Students = require("./modules/students");
mongoose.connect('mongodb://localhost:27017/school');

app.set("view engine" ,"ejs")

const options = {
    index : false,
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, __dirname + '/public/uploads')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    const orgname = file.originalname;
    cb(null, file.fieldname + '-' + uniqueSuffix + orgname.substring(orgname.lastIndexOf("."),orgname.length))
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
  
app.post('/create',upload.single("pname"), async function (req, res) {
  console.log("b",req.body)
  console.log("f",req.file)
      const Student = new Students({...req.body, pname:req.file.filename})
      await Student.save();
      res.redirect('/')
})

app.get('/edit',async (req, res) => {
  const Student = await Students.findById(req.query.id);
  res.render('edit', { Students: Student });
});

app.post("/edit",upload.single("pname"), async (req, res) => {
  const Student = await Students.findById(req.query.id);

  const data = req.body;
  const old_img = Student.pname;

  if(req.file){
    data["pname"] = req.file.filename;
  }

  await Students.updateOne({ _id: req.query.id }, { $set: data });

  if(req.file){
    fs.rm(__dirname + "/public/uploads/"+old_img,()=>{
      console.log("old delete"+old_img);
    })
  }

  res.redirect('/');
});

app.get("/delete", async (req, res) => {
  const result = await Students.deleteOne({ _id: req.query.id });
  res.redirect('/');
})

app.listen(port,()=>{
    console.log(`http://localhost:${port}/`)
})