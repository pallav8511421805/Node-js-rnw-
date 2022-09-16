const fs = require('fs')
const filedata = fs.createReadStream('data.html')
filedata.on('data',(data)=>{
    const http = require('http')
const api = http.createServer(function (req,res) {
console.log('Hello')
res.end(data.toString());
})
})
api.listen(3000)