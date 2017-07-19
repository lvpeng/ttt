const path = require('path');
const { spawn } = require('child_process');

const { fork } = require('child_process');


if (process.getgroups) {
  console.log(`Current uid: ${process.getgroups()}`);
}
const child_proces = fork(path.join(__dirname, '/foo.js'), [], {

})