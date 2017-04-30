
var fs = require('fs');

function someAsyncOperation (callback) {
  // Assume this takes 95ms to complete
  fs.readFile('./Eventloop/1.txt', 'utf8', (error, data) => {
    if(error){
      throw error;
    }
    console.log(2)
    callback(data)
  });
  console.log(1)
}

var timeoutScheduled = Date.now();

setTimeout(function () {

  var delay = Date.now() - timeoutScheduled;

  console.log(delay + "ms have passed since I was scheduled");
}, 100);


// do someAsyncOperation which takes 95 ms to complete
someAsyncOperation(function (data) {
  console.log(3)
  // var startCallback = Date.now();

  // // do something that will take 10ms...
  // while (Date.now() - startCallback < 10) {
  //   console.log('callback'); // do nothing
  // }
  
});

