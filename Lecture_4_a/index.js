const http = require("http");
const fs = require("fs");
const express = require("express");
const app = express();
app.set("view engine", "ejs");
app.get("/", (req, res) => {
  res.render("Home");
});
// app.use thi middle ware use thay
app.use((req, res, next) => {
  if (req.url === "/a") {
    res.redirect("/");
    console.log("middlewarwe");
  } else {
    next();
  }
});
app.get("/a", (req, res) => {
  res.render("About");
});

app.listen(3001);
