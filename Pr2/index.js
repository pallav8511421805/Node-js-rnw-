// const http = require("http");
// const fs = require("fs");
// function workpage(req, res) {
//   fs.readFile("work.html", function (err, data) {
//     res.writeHead(200, { "content-type": "text/html" });
//     res.write(data);
//     res.end();
//   });
// }
// function work1page(req, res) {
//   fs.readFile("work1.html", function (err, data) {
//     res.writeHead(200, { "content-type": "text/html" });
//     res.write(data);
//     res.end();
//   });
// }
// function homepage(req, res) {
//   fs.readFile("index.html", function (err, data) {
//     res.writeHead(200, { "content-type": "text/html" });
//     res.write(data);
//     res.end();
//   });
// }
// function teampage(req, res) {
//   fs.readFile("team.html", function (err, data) {
//     res.writeHead(200, { "content-type": "text/html" });
//     res.write(data);
//     res.end();
//   });
// }
// function blogpage(req, res) {
//   fs.readFile("blog.html", function (err, data) {
//     res.writeHead(200, { "content-type": "text/html" });
//     res.write(data);
//     res.end();
//   });
// }
// function defaultpage(req, res) {
//   fs.readFile(__dirname + req.url, function (err, data) {
//     if (err) {
//       res.writeHead(404);
//       res.write(err.toString());
//       res.end();
//     } else {
//       res.writeHead(200);
//       res.write(data);
//       res.end();
//     }
//   });
// }
// let app = http.createServer(function (req, res) {
//   switch (req.url) {
//     case "/":
//       homepage(req, res);
//       break;
//     case "/w":
//       workpage(req, res);
//       break;
//     case "/t":
//       teampage(req, res);
//       break;
//     case "/w1":
//       work1page(req, res);
//       break;
//     case "/b":
//       blogpage(req, res);
//       break;
//     default:
//       defaultpage(req, res);
//       break;
//   }
// });
// app.listen(8000);

