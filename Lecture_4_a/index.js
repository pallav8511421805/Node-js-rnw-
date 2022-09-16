const http = require('http')
let api = http.createServer(function (req,res) {
res.end(`<html><body><h1>
Hello</h1></body></html>`);
})
api.listen(3000)