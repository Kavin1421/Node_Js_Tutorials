// const logEvent = require('./logEvents');
const logs = require('./logEvents')
const EventEmitter =  require('events') 
console.log("Testing")
// const {format} = require('date-fns')
// // Kevin is an Alise name like the 'As'
// const {v4 : Kevin} = require('uuid')
// console.log(format(new Date(),'dd mm yyyy\tHH:mm:ss'))
// console.log("ID : ",Kevin());

class MyEmitter extends EventEmitter{} //Class

const myEmitter =  new MyEmitter();
myEmitter.on('log',(msg)=>{
    logs(msg);
})

myEmitter.emit('log','Log Event Emitted!!')