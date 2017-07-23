process.on('message', (m) => {
    console.log('child got msg:', m);
})

setTimeout(() => {
    process.send({foo: 'bar'})
    process.disconnect();
} ,3000)
