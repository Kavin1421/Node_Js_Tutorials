const fs = require('fs')
const fsprom = require('fs').promises
const path = require('path')
const {format} = require('date-fns')
const {v4 : Kevin} = require('uuid')


const logEvent= async(message)=>{
    const dateTime = `${format(new Date(),'dd mm yyyy\tHH:mm:ss')}`
    const logItem =`${dateTime}\t${Kevin()}\t${message}\n'==>'`
    console.log(logItem) 
    try{
        if(!fs.existsSync(path.join(__dirname,'./log')))
        {
           await  fsprom.mkdir(path.join(__dirname,'./log'),(err)=>{
                if(err) throw err
                console.log("Directory Created!") 
                })
            await fsprom.appendFile(path.join(__dirname,'log','EventFile.txt'),logItem)
        }
        else{
            console.log("Already Exits!!")
            await fsprom.appendFile(path.join(__dirname,'log','EventFile.txt'),logItem)
        }
    }
    catch(err){
        console.error(err)
    }
}

module.exports = logEvent