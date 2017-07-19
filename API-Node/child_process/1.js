const { spawn } = require('child_process')
// const { exec } = require('child_process')
const child = spawn(process.argv[0], ['child_program.js'] , {
  cwd: process.cwd(),
  detached: true,
  stdio: 'ignore'
})


child.unref()
child.stdout.on('data', (data) => {
   console.log(`stdout: \r\n ${data}`);
})

ls.stderr.on('data', data =>{
  console.log(`stderr: \r\n ${data}`)
})


// const spawn = require('child_process').spawn;
//
// const ls = spawn('ls', ['-lh', __dirname])
//
// ls.stdout.on('data', (data) => {
//   console.log(`stdout: ${data}`);
// });
//
// ls.stderr.on('data', (data) => {
//   console.log(`stdder : ${data}`);
// });
//
// ls.on('close', (code) => {
//   console.log(`child process exited with code ${code}`);
// })
//
// const exec = require('child_process').exec;
// exec('my.txt', (err, stdout, stderr)=>{
//   if (err) throw err
//   console.log(stdout);
// })

// const execFile = require('child_process').execFile;
// const child = execFile('node', ['--version'], (error, stdout, stderr) => {
//   if (error) {
//     throw error;
//   }
//   console.log(stdout);
// });
