const http = require('http');
const url = require('url');

const options = {
    host: 'localhost',
    path: '/api/parsetime'
}

const server = http.createServer((req, res) => {
    var isoTime = url.parse(req.url).iso 
    var timeObj = {
        "hour": new Date(isoTime).getHours(),
        "minute": new Date(isoTime).getMinutes(),
        "second": new Date(isoTime).getSeconds()
    }
    res.writeHead(200, {
        'Content-type': 'application/json' 
    })
    res.write(JSON.stringify(timeObj))
    res.end()
})

server.listen('/api/parsetime', ()=>{
    
})
server.listen('/api/unixtime', (socket) => {
    
})

server.listen(Number(process.argv[2]))

