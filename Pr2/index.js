const express = require("express");
const app = express();
const port = 3000;
const fs = require("fs");

app.get("/", (req, res) => {
  fs.readFile("index.html", (err, data) => {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(data);
    res.end();
  });
});

app.get("/w1", (req, res) => {
  fs.readFile("work1.html", (err, data) => {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(data);
    res.end();
  });
});

app.get("/w", (req, res) => {
  fs.readFile("work.html", (err, data) => {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(data);
    res.end();
  });
});

app.get("/b", (req, res) => {
  fs.readFile("blog.html", (err, data) => {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(data);
    res.end();
  });
});

app.get("/t", (req, res) => {
  fs.readFile("team.html", (err, data) => {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(data);
    res.end();
  });
});

function defaultpage(req, res) {
  fs.readFile(__dirname + req.url, function (err, data) {
    if (err) {
      res.writeHead(404);
      res.write(err.toString());
      res.end();
    } else {
      res.writeHead(200);
      res.write(data);
      res.end();
    }
  });
}

defaultpage(req, res);

app.listen(port);
