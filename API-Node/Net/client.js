// const net = require('net');

// const client = net.createConnection()

// client.connect(1337, '127.0.0.1', () => {
//     console.log('connected')
//     client.write('hi ,server')
// }).on('data', (data) => {
//     console.log(data)
// }).on('close', () => {
//     console.log('disconnect')
// })

var net = require('net');

var client = new net.createConnection();
client.connect(1337, '127.0.0.1', function() {
    client.write('hi, server');
});

client.on('data', function(data) {
	console.log('Received: ' + data);
	client.destroy(); // kill client after server's response
});

client.on('close', function() {
	console.log('client close');
});