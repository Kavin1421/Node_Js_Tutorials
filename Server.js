console.log("Day 1 => Hope Everthing Fine!!!")
// // console.log(global)
// // Import MOdules =>
// const os = require('os')
// console.log(os.type())
// console.log(os.version())
// console.log(os.homedir())
// console.log(os.hostname())

// console.log("----------------")
// console.log(__dirname)
// console.log(__filename)
// console.log("----------------")
// const path = require('path')
// console.log(path.parse(__filename))
// console.log("----------------")
// console.log("--Impoting the Methods in Another File--")
// const math=require('./Math')
// console.log(math.add(10,20))
// console.log(math.sub(100,20))
// console.log(math.mul(1,20))
// console.log(math.div(100,20))
// // Another Type
// const {add,sub,mul,div}=require('./Math')
// console.log(add(10,20))
// console.log(sub(100,20))
// console.log(mul(1,20))
// console.log(div(100,20))
// =======>Renmaing to .mjs Coz of Importing those modules like Actual Es6
// console.log("Renmaing to .mjs Coz of Importing those modules like Actual Es6")
// import { readFile } from 'node:fs';

// readFile('./File/text.txt', (err, data) => {
//   if (err) throw err;
//   console.log(data);
//   console.log("For Actual Data");
//   console.log(data.toString());
// });

// Another Type Without ToString ==>

// readFile('./File/text.txt','utf8',(err, data) => {
//   if (err) throw err;
//   // console.log(data);
//   console.log("Without Two String!!");
//   console.log(data);
// });
//Read
const fs = require('fs')
const path = require('path')
fs.readFile(path.join(__dirname,'File','text.txt'), (err, data) => {
  if (err) throw err;
  console.log(data);
  console.log("For Actual Data");
  console.log(data.toString());
});

//Write
fs.writeFile(path.join(__dirname,'File','newfile.txt'),'This is New File Containing the Write Modules', (err) => {
  if (err) throw err;
  console.log("Writing Success!!");
});

//Error Recording!!!!!
process.on('uncaughtException',err=>{
  console.error(`There was an Uncaught error : ${err}`)
process.exit(1)
});