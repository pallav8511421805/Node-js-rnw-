const http = require("http");
const fs = require("fs");
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
let api = http.createServer(function (req, res) {
  switch (req.url) {
    default:
      defaultpage(req, res);
      break;
  }
});
api.listen(3001);
