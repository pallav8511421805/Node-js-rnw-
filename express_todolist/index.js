const qs = require("querystring");
const express = require("express");
const app = express();
const port = 3000;
const fs = require("fs");

app.use(express.static("public"));
app.set("view engine", "ejs");
app.get("/", (req, res) => {
  res.render("index");
});

app.listen(port, () => {
  console.log(`http://localhost:${port}/`);
});
