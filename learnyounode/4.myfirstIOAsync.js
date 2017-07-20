const fs = require('fs')

// let filePath = __dirname + '/hello.txt'
let filePath = process.argv[2]

fs.readFile(filePath, 'utf8', (err, content) => {
    if (err) throw err;

    console.log(content.split("\n").length -1 )    
})
