const {spawn} = require('child_process')
const grep = spawn('grep', ['ssh'])

console.log('grep pid : %d ', grep.pid);

grep.stdin.end()
// child.on('message', (message, sendHandle) => {

// })

