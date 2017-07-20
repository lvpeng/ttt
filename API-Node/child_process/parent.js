const cp = require('child_process')
const n = cp.fork(`${__dirname}/child.js`)

n.on('message', (m) =>{
    console.log('parent got msg:', m);
})

n.send({hello: 'wokld'})