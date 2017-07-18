const fs = require('fs');
const path = require('path');
path.resolve
const rr = fs.createReadStream(process.env.path + "/foo.txt");
rr.on('readable', () => {
  console.log('readable:', rr.read());
});
rr.on('end', () => {
  console.log('end');
});

const buf1 = Buffer.alloc(10)

const buf2 = Buffer.alloc(10,1);

const buf3 = Buffer.allocUnsafe(10);

const buf4 = Buffer.from([1,2,3])

const buf5 = Buffer.from('tset')
