const fs = require('fs')
// Making Directory!
if(fs.existsSync('./new')){
fs.rmdir('./new',(err)=>{
if(err) throw err
console.log("Dir Allready Exits!")
console.log("Directory Deleted!")
})
}
else{
    fs.mkdir('./new',(err)=>{
        if(err) throw err
        console.log("Directory Created!")
        })
}

//Error Recording!!!!!
process.on('uncaughtException',err=>{
    console.error(`There was an Uncaught error : ${err}`)
    process.exit(1)
    });