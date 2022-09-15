const fs = require('fs')
const filedata = fs.createReadStream('Text.txt')
filedata.on('data',(data)=>{
    console.log('File : ' ,data.toString())
})
filedata.on('error',(e)=>{
    console.log('File ERROR : ' ,e)
})
console.log('Program End')