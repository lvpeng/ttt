const net = require('net')
const path = require('path')

const server = net.createServer( c => {
  c.write("hi, client")
  c.pipe(c);
}).on('error', err=>{
  throw err
}).on('end', () => {
  console.log(' server disconnect')
}).on('data', data => {
  console.log(data)
}).on('close', () => {
  c.write('Bye ,client');
})

// server.listen(1337, '127.0.0.1')
server.listen(path.join('\\\\?\\pipe', process.cwd(), 'myctl'))