const fs= require('fs')
const path = require('path')

const rs = fs.createReadStream(path.join(__dirname,'File','BigFile.txt'),{encoding : 'utf8'})
const ws = fs.createWriteStream(path.join(__dirname,'File','New_BigFile.txt'))

// rs.on('data',(dataChunk)=>{
//     ws.write(dataChunk)
// })

// Efficient Way
rs.pipe(ws)
console.log("File Copied!!")
