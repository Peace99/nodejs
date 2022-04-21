const express = require('express')
const app = express()
const { logger } = require('./logger')
const { authorize } = require('./authorize')

//req => middleware => res
// app.use('/api',logger)

app.use([logger, authorize])

app.get('/',  (req, res) => {
    res.send('Home Page')
})

app.get('/about', (req, res) => {
    res.send('About')
})

app.get('/api/products', (req, res) => {
    res.send('Home')
})

app.get('/api', (req, res) => {
    res.send('About')
})

app.listen(5000, () => {
    console.log('Server is running')
}) 
