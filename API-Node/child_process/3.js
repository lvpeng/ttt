const cp = require('child_process')

// const n = cp.fork(`${__dirname}/sub.js`)

// n.on('message', (m) => {
//     console.log('parent got msg: ', m);
// })

// n.send({hello: 'evan'})

// n.disconnect()
// n.on('disconnect', () => {
//     console.log('disconnect');
// })



// cp.exec(`node ${__dirname}/child2.js test` , (err, stdout, stderr) => {
//     if (err) throw err
//     console.log('stdout:', stdout);
//     console.log('stderr', stderr);
// }).on('exit', (code, signal) => {
//     console.log('exit with code :', code, signal);
// })

cp.exec(`cat hello.txt | wc -l`, {
    // shell: '/bin/sh'
},(err, stdout, stderr) => {
    console.log(stdout);
})