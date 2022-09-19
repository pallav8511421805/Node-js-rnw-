const http = require("http");
const fs = require("fs");
function Homepage(req, res) {
  fs.readFile("index.html", function (err, data) {
    res.writeHead(200, {
      "Content-Type": "text/html",
    });
    res.write(data);
    res.end();
  });
}
function Aboutpage(req, res) {
  fs.readFile("About.html", function (err, data) {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(data);
    res.end();
  });
}
let api = http.createServer(function (req, res) {
  switch (req.url) {
    case "/about":
      Aboutpage(req, res);
      break;

    default:
      Homepage(req, res);
      break;
  }
});
api.listen(3001);
