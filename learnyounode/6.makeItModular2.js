const fs = require('fs')
const path = require('path');
var result = [];

module.exports = function filterFile(dir, extention, callback) {
    fs.readdir(dir, (err, files) => {
        if (err) return callback(err)
        files.forEach(function(file) {
            if (path.extname(file) === "." + extention) {
                result.push(file)
            }
        }, this);
        callback(null, result)
    })
}



// module.exports = function lsFile(dir, extention, fn) {
//     fs.readdir(dir, (err, files) => {
//         if (err) return fn(err);
//         files.forEach(function(file) {
//             if (path.extname(file) ===  extention) {
//                 result.push(file)
//             }
//         }, this);
//         return fn(null, result)
//     })
// }