const net = require('net')

const server = net.createServer( socket => {
    socket.address()
})

server.on('listening', (socket) => {
    socket.address()
})

const getPort = (port) => {

}

//module.exports = port ?  getPort()


function getPort(port) {
    const server = net.createServer();
    
    server.listen(port)
    return new Promise( (resolve, reject) => {
        server.on('connection', (socket) => {
            resolve(socket.address().port)
        })
    })
}