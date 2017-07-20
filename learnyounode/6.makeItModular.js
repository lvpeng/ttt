const lsFile = require('./6.makeItModular2.js')

lsFile(__dirname, 'txt', (files) => {
    files.forEach(function(file) {
        console.log(file);
    }, this);
})