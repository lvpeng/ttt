const http = require('http')
const bl = require('bl')
const urls = process.argv.splice(2,  process.argv.length -2 )
var completed_requests = 0
var responses = []


function handleResponses (){
    for (var i =0 ; i < responses.length ; i++) {
        console.log(responses[i])
    }
}



function httpGet(index) {
    http.get(urls[index], (res) => {
        res.pipe(bl((err, data) => {
            if (err) {
                return console.error(err)
            }
            responses[index] = data.toString()
            completed_requests++;
            if (completed_requests == 3 ) {
                handleResponses()
            }
        }))
    })
}

for (var i = 0; i < urls.length; i++) {
    httpGet(i)
}