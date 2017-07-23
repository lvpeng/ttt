const BufferList = require('bl')
var bl = new BufferList()

bl.append(new Buffer('abc'))

bl.append('hi')

bl.append(new Buffer('j'))
bl.append(new Buffer([0x3, 0x4]))
console.log(bl)