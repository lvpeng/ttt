const fs = require("fs");
const path = require("path");

const filepath = path.resolve(__dirname, "test.txt")
fs.open(filepath, 'a+', function(err, fd){
    fs.read(fd, )
})

// fs.watch(filepath, { encoding:"utf8"}, (eventType, filename) => {
//     if(filename) {
//         console.log(filename)
//     }
// })
// fs.readFile("./data.txt", 'utf8', (err, data) => {
//     console.log(data)    
// })


// fs.createReadStream(__dirname + "./data.txt", )