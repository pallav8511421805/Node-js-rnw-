const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));
app.set("view engine", "ejs");

const title = "Starty";

app.get("/", (req, res) => {
  res.render("index", { title: title });
});

app.get("/w1", (req, res) => {
  res.render("work1", { title: title });
});

app.get("/w", (req, res) => {
  res.render("work", { title: title });
});

app.get("/b", (req, res) => {
  res.render("blog", { title: title });
});

app.get("/t", (req, res) => {
  res.render("team", { title: title });
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
