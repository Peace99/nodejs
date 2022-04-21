const express = require('express')
const path = require('path')
const app = express()

//app.use
//setup static and middleware
//static method is used for files that the server don't have to change 
app.use(express.static('./public'))


//app.get
// app.get('/', (req, res) =>{
//    res.sendFile(path.resolve(__dirname, './Navbar/index2.html'))
// })

app.all('*', (req, res) =>{
    res.status(404).send('resource not found')
})




app.listen(5000, ()=> {
    console.log('server is listening on port 5000.....')
})