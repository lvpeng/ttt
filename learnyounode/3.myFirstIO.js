const fs = require('fs')


let filePath = process.argv[2]
// let filePath = __dirname + '/hello.txt'

const content = fs.readFileSync(filePath, {
    encoding: 'utf8'
})
var result = content.match(/\n/g);
result = result ? result.length : 0; 
console.log(result)