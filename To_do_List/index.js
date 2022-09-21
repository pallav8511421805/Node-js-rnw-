const http = require("http");
const fs = require("fs");
function homepage(req, res) {
  fs.readFile("index.html", function (err, data) {
    if (err) {
      res.writeHead(404);
      res.write(err.toString());
      res.end();
    } else {
      res.writeHead(200, { "content-type": "text/html" });
      res.write(data);
      res.end();
    }
  });
}
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
let app = http.createServer(function (req, res) {
  switch (req.url) {
    case "/":
      homepage(req, res);
      break;
    default:
      defaultpage(req, res);
      break;
  }
});
app.listen(3001);
