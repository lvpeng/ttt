// var doExe = require('./1.js')
// var result = [];
// var count = 0
// var aTest = (nums) => {
//     for (var i = 0; i < nums; i++) {
//         var item = i;
//         result.push(item)
//         count++ ;
//         if (count == 9) {
//             doExe(item, () => {
//             for (var j = 0; j < count; j++) {
//                 console.log(j);
//             }
//         })
//         }
        
//     }
// } 


// aTest(10)
var doExe = function (a, callback) {
    setTimeout(() => {
        console.log(a);
        if(callback) {
            callback()
        }
    },10 * Math.random())
}

(async() => {
    for (var i = 0; i < 10; i++) {
        await new Promise(resolve => doExe(i, resolve))
    }
})();


var i = 0;
var aTest = function(){
    i < 10 && doExe(i++, aTest)
}

aTest()