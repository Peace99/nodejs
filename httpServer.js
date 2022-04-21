const http = require('http')
const {readFileSync} = require('fs')

const homepage = readFileSync('./index.html')

const server = http.createServer((req, res) => {
  const url = req.url
   if (url === '/'){
   res.writeHead(200, {'content-type':'text/html'})
   res.write(homepage)
   res.end()
   }
   else if (url === '/about'){
    res.writeHead(200, {'content-type':'text/html'})
    res.write('<h3>About Page</h3>')
    res.end()
   }
   else {
    res.writeHead(400, {'content-type':'text/html'})
    res.write('<h3>Page not found</h3>')
    res.end()
   }
})

server.listen(5000)