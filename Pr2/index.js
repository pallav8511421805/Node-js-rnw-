const express = require("express");
const mongoose = require('mongoose');
const app = express();
const port = 3000;

app.use(express.static("public"));

app.set("view engine", "ejs");

const title = "Starty";

mongoose.connect('mongodb://localhost:27017/demo1');

const Cat = mongoose.model('Cat', { name: String ,age:Number});

const kitty = new Cat({ name: 'ket',age:26 });

kitty.save().then((res) => {console.log("res",res)}
).catch((e)=>console.log("error",e))

app.get("/", (req, res) => {
  res.render("index", { title: title });
});

app.get("/work", (req, res) => {
  res.render("work1", { title: title });
});

app.get("/Work", (req, res) => {
  res.render("work", { title: title });
});

app.get("/blog", (req, res) => {
  res.render("blog", { title: title });
});

app.get("/team", (req, res) => {
  res.render("team", { title: title });
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
