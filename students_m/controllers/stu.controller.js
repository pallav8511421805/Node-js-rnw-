const Students = require("../models/students");
const fs = require("fs");

const GETSTU = async function (req, res) {
    const Student = await Students.find()
    res.render('stu',{ data : Student})
  }

const CREATESTU = function (req, res) {
    res.render('stu/create')
  }

const CREATEPOST = async function (req, res) {
    const Student = new Students({...req.body, pname:req.file.filename})
    await Student.save();
    res.redirect('/stu')
  }  

const EDIT = async (req, res) => {
    const Student = await Students.findById(req.query.id);
    res.render('stu/edit', { Students: Student });
  }

const UPDATES = async (req, res) => {
    const Student = await Students.findById(req.query.id);
  
    const data = req.body;
    const old_img = Student.pname;
  
    if(req.file){
      data["pname"] = req.file.filename;
    }
  
    await Students.updateOne({ _id: req.query.id }, { $set: data });
  
    if(req.file){
      fs.rm(__dirname + "/public/uploads/"+old_img,()=>{
      })
    }
  
    res.redirect('/stu');
  }

const DELETE = async (req, res) => {
    const result = await Students.deleteOne({ _id: req.query.id });
    res.redirect('/stu');
  }  
module.exports = {
    GETSTU,
    CREATESTU,
    CREATEPOST,
    EDIT,
    UPDATES,
    DELETE
}