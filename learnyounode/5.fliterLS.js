const fs = require('fs')
const path = require('path')

const folder = process.argv[2]
const extention = '.' + process.argv[3]

// fs.readdir(dir,  (err, files) => {
//     if (err) throw err;
//     var result = files.filter(file => {
//         return file.split('.').pop() == extention
//     })
//     console.log(result);
// })
fs.readdir(folder , (err, files) => {
    if (err) throw err;
    files.forEach((file) => {
        // if (file.indexOf('.') !== -1 && file.split('.').pop() == extention ){
        //     console.log(file)
        // }
            if (path.extname(file) === extention) {
                console.log(file)
            }
    })
})