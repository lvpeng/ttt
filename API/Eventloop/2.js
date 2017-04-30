const fs = require('fs')

function someAsycFn(callback){
    console.log(1)
    fs.readFile('./Eventloop/1.txt', 'utf8', (err, data)=>{
        if (err) throw err;
        callback(data)
    })
}

setTimeout(()=>{
    console.log(2)
},1)

someAsycFn( data => {
    console.log(3)
    setTimeout(()=>{
        let startCallback = Date.now();
        while(Date.now() - startCallback < 10){
            //... do something
        }
    },1000)
    console.log(data)
})
