const http = require('http')

const reqUrl = process.argv[2]

// http.get(reqUrl ,(res) => {     
//     res.on('data',(chunk) => {
//        console.log(chunk.toString());
//     })
// })
http.get(reqUrl, (res) => {
    res.setEncoding('utf8')
    res.on('data', console.log)
    res.on('error', console.error)
}).on('error', console.error)
