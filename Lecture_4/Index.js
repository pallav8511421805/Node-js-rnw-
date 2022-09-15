const fs = require('fs')
const filedata = fs.createReadStream('Text.txt')
filedata.on('data',(data)=>{
    console.log('File : ' ,data.toString())
})
console.log('Program End')