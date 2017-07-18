const net = require('net')


const server = net.createServer( (socket) => {
  socket.end('goodbye\n')
}).on('error', (err) => {
  throw err;
}).on('connect', () => {
  console.log('connect');
});

server.listen( {
  host: '127.0.0.1',
  port: 8080,
},() => {
  console.log('listen on port', server.address);
})
