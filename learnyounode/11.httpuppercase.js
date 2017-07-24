const http = require('http');
const url  = require('url');


const server = http.createServer( (req,res) => {
    var postData = ''
    req.on('data', (chunk) => {
        postData += chunk;
    })
    if (req.method == 'POST') {
        req.on('end', () => {
         res.writeHead(200, {
            'content-type': 'application/json'
        })
        res.end(postData.toUpperCase())
        })
     }else {
        return req.end('send me a POST \n')
    }
});

server.listen(Number(process.argv[2]));