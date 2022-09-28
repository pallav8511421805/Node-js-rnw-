const http = require("http");
const fs = require("fs");
const qs = require("querystring");
function homepage(req, res) {
  fs.readFile("index.html", function (err, data) {
    if (err) {
      res.writeHead(404);
      res.write(err.toString());
      res.end();
      return;
    }
    fs.readFile("data.json", function (e, d) {
      let output = "";
      if (d) {
        const task = JSON.parse(d);
        for (let t of task) {
          output += `<tr>`;
          output += `<td>${t.name}</td>`;
          output += `<td>${t.age}</td>`;
          output += `<td>${t.status}</td>`;
          output += `</tr>`;
        }
      }
      let html = data.toString();
      html = html.replace("#data#", output);
      res.writeHead(200);
      res.write(html);
      res.end();
    });
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
function createpage(req, res) {
  if (req.method == "POST") {
    var body = [];
    req.on("data", function (data) {
      body += data;
    });
    req.on("end", function () {
      var post = qs.parse(body);
      fs.readFile("data.json", (error, data) => {
        var output = [];
        if (!error) {
          output = JSON.parse(data);
        }
        output.push(post);
        fs.writeFile("data.json", JSON.stringify(output), (e, data) => {});
      });
    });
  }
  res.writeHead("302", { Location: "/" });
  res.end();
}
let app = http.createServer(function (req, res) {
  switch (req.url) {
    case "/":
      homepage(req, res);
      break;
    case "/create":
      createpage(req, res);
      break;
    default:
      defaultpage(req, res);
      break;
  }
});
app.listen(3000);
