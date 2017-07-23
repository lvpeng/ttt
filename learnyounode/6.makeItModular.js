const filterFile  = require('./6.makeItModular2.js')
const extention = process.argv[3]
const dir = process.argv[2]

filterFile(dir, extention, (err, data) => {
    if (err) {
        return console.error('there was an error:' , err)
    }
    data.forEach(function(file) {
        console.log(file);
    }, this);
});
