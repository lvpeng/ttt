//  streaming data
// steam can be readable, writable , or both
// all streams are instanceof EventEmitter
const stream = requrie('stream');

// Types of Streams 
// Readable :fs.createReadStream()
// Writeable : fs.createWriteStream()
// Duplex: net.Socket
// Transform