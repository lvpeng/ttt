const fs = require('fs')
const path = require('path')
var result = [];

module.exports = {
 lsFile : function(folder, extention, fn) {
    fs.readdir(folder, (err, file) => {
        if (path.extname(file) === '.' + extention) {
            result.push(file)
        }
    })
    return fn(result);
    }   
}