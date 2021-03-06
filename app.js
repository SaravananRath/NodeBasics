// function helloNode(name){
//     global.console.log('Hello, '+name)
// }
//
// helloNode('Saravanan')
// console.log(module)

// const logger = require('./logger');
// // logger =1;
// // logger.log('Module Loaded')
// logger('Module Loaded')
// const EventEmitter = require('events')

const Logger = require('./logger')
const logger = new Logger()

// logger.on('EventFired',(arg)=>{
//     console.log('EventListened',arg)
// })
// logger.log('Module With listener')

const path = require('path')
const pathObj = path.parse(__filename)
// console.log(pathObj)

const os = require('os')
const totalmem = os.totalmem()
const freemem = os.freemem()
const userInfo =os.userInfo()
// console.log("Total Memory : "+totalmem)
// console.log(`Free Memory : ${freemem}`)
// console.log(userInfo)

const fs = require('fs');
// const files = fs.readdirSync('./')
// console.log(files)
// fs.readdir('./',function(err,result){
//     if(err)console.log(`Error: ${err}`)
//     else console.log("Result:"+ result)
// })

// const EventEmitter = require('events')
// const emitter = new EventEmitter();
// emitter.on('EventFired',function(){
//     console.log('EventListened')
// })
// emitter.emit('EventFired')
// emitter.on('EventFired',function(arg){

const http = require('http')
// const server = http.createServer()
// server.on('connection',(socket)=>{
//     console.log('New Connection')
// })
// server.listen(3000);
// console.log('Listening on port 3000')
const server = http.createServer((req,res)=>{
    if(req.url==='/'){
        res.write('Hello World')
        res.end()
    }
    if(req.url==='/api/numbers'){
        res.write(JSON.stringify([1,2,3]))
        res.end()
    }
})

server.listen(3000)
console.log('Listening on port 3000')