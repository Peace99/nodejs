const express = require('express')
// const apps = require('express')()
const app = express()

//app.get
//you pass a path that the user is requesting for
// and a callback function, which will be invoked anytime a user performs a get request
//you use send in express to send a response
app.get('/', (req, res) => {
    res.status(200).send('Home Page')
})

app.get('/about', (req, res) => {
    res.status(200).send('about page')
})

//it also takes to arguments, a path and a callback function
app.all('*', (req, res) => {
    res.status(404).send('<h1>resource not found</h1>')
})

app.listen(5000, () => {
    console.log('server is listening on port 5000...')
})


//app.get
//app.post
//app.put
//app.delete
//app.all
//app.listen
//app.use