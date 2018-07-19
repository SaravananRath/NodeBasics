// (function (exports, require, module, __filename, __dirname) {
// var x=;
const EventEmitter = require('events')
// const emitter = new EventEmitter();
    var url = 'http://'

class Logger extends EventEmitter{
     log(message) {
        //send an http request
        console.log(message)
        // emitter.emit('EventFired',{ id:1,name:'Saravanan'})
         this.emit('EventFired',{ id:1,name:'Saravanan'})

     }
}

// console.log(__filename)
// console.log(__dirname)

// console.log(module)
// module.exports.log=log;
module.exports = Logger
//     module.exports.log = log;   correct
//     exports.log = log;    //correct
     // exports = log ; incorrect //exports refers to module.exports


// }