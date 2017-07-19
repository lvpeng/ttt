// Global 

// an instance of EventEmitter

// Event: beforeExit

process.on('exit', (code) => {

})

// the Node.js process is spawned with IPC channel, the 'disconnect' will be emitted when the IPC channel is closed
process.on('disconnect', () => {

})


process.on('signhup', () => {
    console.log('Got signhup signal');
})

setTimeout(function() {
    console.log('exiting');
    process.exit(0)
}, 100);

process.kill(process.pid, 'signhup')

// const NS_PER_SEC = 1e9;
// time = process.hrtime()
// console.log(time);
// setTimeout(() => {
//     const diff = process.hrtime(time)
//     console.log(diff);
//     console.log(`Benchmark took ${diff[0] * NS_PER_SEC + diff[1]}  nanoseconds`);
// }, 2000);
