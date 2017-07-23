//  streaming data
// steam can be readable, writable , or both
// all streams are instanceof EventEmitter
const stream = require('stream');
const path = require('path')
const emitter = require('events').EventEmitter;
const zlib = require('zlib')
// Types of Streams 
// Readable :fs.createReadStream()
// Writeable : fs.createWriteStream()
// Duplex: net.Socket
// Transform

var fs = require('fs')

var readStream =  fs.createReadStream(path.join(__dirname, '/hello.gz.zip' ))

readStream.pipe(zlib.createGunzip())
          .pipe(fs.createWriteStream('./file.txt')) 
// readStream.setEncoding('utf8');

var data = "";
// console.log(readStream instanceof emitter);
readStream.on('data', (chunk) => {
    data += chunk;
})

// when to emit `data` event
readStream.on('end', () => {
    console.log(data);
})


// fs.watch(path.join(__dirname, '/hello.txt'), (rename, filename) =>{
//     console.log(filename);
// })