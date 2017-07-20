const argv = process.argv

const argument = argv.splice(2, argv.length-2)
var sum = 0;
    argument.forEach(function(element) {
    if (typeof  parseInt(element)  == 'number'){
            sum += Number(element);
    }else {
        process.stderr.write('argument must be number\r\n')
        return false;
    }
}, this);
console.log(sum) 

