const express = require("express");
const fs = require("fs");
const app = express();
const port = 3000;

app.use(express.static("public"));
app.set("view engine", "ejs");
app.get("/", (req, res) => {
  res.render("index");
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

app.get("/create", (req, res) => {
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
});

app.listen(port, () => {
  console.log(`http://localhost:${port}/`);
});
