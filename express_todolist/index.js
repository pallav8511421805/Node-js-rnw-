const express = require("express");

const bodyParser = require("body-parser");

const app = express();

const port = 3000;

const options = {
  index: false,
};

const NewI = [];

app.use(express.static("public", options));

app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", { newitem: NewI });
});

app.post("/create", (req, res) => {
  let name = req.body.name;
  let age = req.body.age;
  let status = req.body.status;
  const data = {
    Name: name,
    Age: age,
    Status: status,
  };
  NewI.push(data);
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`http://localhost:${port}/`);
});
