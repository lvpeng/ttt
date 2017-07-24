const net = require('net')

const server = net.createServer(socket => {
    let date = new Date();
    let formatedTime = `${date.getFullYear()}-${(date.getMonth()+1)<10 ? ('0'+  (date.getMonth()+ 1) ) : date.getMonth()+1}-${ (date.getDate() <10) ? ('0'+ date.getDate()) : date.getDate()} ${ (date.getHours() < 10) ? ('0' + date.getHours()) : date.getHours() }:${ (date.getMinutes() < 10) ? ('0' + date.getMinutes()): date.getMinutes()}`
    
    socket.end(formatedTime + '\n')
})

server.listen(process.argv[2])