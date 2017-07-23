const bl = require('bl')
const fs = require('fs')
const path = require('path')

// fs.createReadStream(path.join(__dirname, '/hello.txt'))
//    .pipe(bl( ( err, data) => {
//        console.log(data.toString())
//    }))

   var data = ""
fs.createReadStream('hello.txt')
    .setEncoding('utf8')
    .on('data', (chunk) => {
        fs.createWriteStream(path.join(__dirname, '/file.txt'))
            .write(chunk)
   }).on("end", () => {

   })
