const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('welcome')
    }
    if (req.url === '/about') {
        res.end('Here is our short story')
    }
    res.end(`<h1>Oops!</h1>
    <p> We can't seem to find the page</p>
    <a href="/>back home</a>`)
})

//listen for the port
server.listen(5000) 