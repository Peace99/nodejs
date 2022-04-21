const { peter } = require("./names")

const sayHi = (name) => {
    console.log(`Hello dear ${name}`)
}


module.exports = sayHi

module.exports.items = ['item1', 'item2']
const person = {
    namez: 'Bob',
}

module.exports.singlePerson = person