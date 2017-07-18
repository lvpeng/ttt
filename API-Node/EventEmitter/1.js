const EventEmitter = require('events')

class MyEmitter extends EventEmitter{}

const myemitter  = new MyEmitter()

myemitter.on('event', function(a,b) {
   console.log(a, b, this)
  }
)
myemitter.on('event', () => {
  console.log(this)
})
myemitter.emit('event', 'a', 123)
myemitter.emit('event', false)


// myemitter.on('error', () => {
//   console.log('oh, error');
// });
// myemitter.emit('error', new Error('oop, error'))


// process.on('uncaughError', () => {
//   console.error('error');
// })

// myemitter.once('newListener', (event, listener) => {
//   if(event == 'event') {
//     myemitter.on('event', () => {
//       console.log('B');
//     })
//   }
// })


// myemitter.on('event', () => {
//   console.log('A');
// })

// myemitter.on('event', () => {
//   console.log('C');
// })
// myemitter.prependListener('event', () => {
//   console.log(0);
// })

// console.log(myemitter.listenerCount('event'));

// const callbackA = () => {
//   console.log('1');
//   myemitter.removeListener('event', callbackB);

// }
// const callbackB = () => {
//   console.log('2');
// }

// myemitter.setMaxListeners(3)

// myemitter.on('event', callbackA)
// myemitter.on('event', callbackB)
// myemitter.emit('event')
// myemitter.emit('event')
