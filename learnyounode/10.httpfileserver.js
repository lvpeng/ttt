const http = require('http');
const fs = require('fs')
const port = process.argv[2];
const filePath = process.argv[3];

// var data = ""
// var readableStream = fs.createReadStream(filePath)
// readableStream.on('data', (chunk) => {
//     data += chunk;
// })


const server = http.createServer((req,res) => {
    res.writeHead(200, { 
        'Content-type' : 'text/plain',
    })
    fs.createReadStream(filePath).pipe(res)
});

server.listen(Number(port))