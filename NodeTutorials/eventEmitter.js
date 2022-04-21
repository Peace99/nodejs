const EventEmitter = require('events')

//create am instance of the event
const customEmitter = new EventEmitter()

//you pass a string to the event method, in this case the name of the event
customEmitter.on('response',(name, id) => {
   console.log(`data recieved from ${name} with id: ${id}`)
})

//you pass the same string used in the on method
customEmitter.emit('response', 'John', 23)