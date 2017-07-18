// net module
const net = require('net') 

// create a new server , 
const server = net.createServer(socket => {
    console.log('client connected ')
    socket.on("connect", () => {
        console.log('socket connect')
    } )
})

console.log(server)