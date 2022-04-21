const http = require('http')
const {readFileSync} = require('fs')

const homepage = readFileSync('./index2.html')
const homestyle = readFileSync('./styles.css')
const homeimage = readFileSync('./logo.svg')
const homelogic = readFileSync('./browser-app.js')

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

   else if (url === '/styles.css'){
    res.writeHead(200, {'content-type':'text/css'})
    res.write(homestyle)
    res.end()
   }
   
   else if (url === '/logo.svg'){
    res.writeHead(200, {'content-type':'image/svg+xml'})
    res.write(homeimage)
    res.end()
   }
   
   else if (url === '/browser-app.js'){
    res.writeHead(200, {'content-type':'text/javascript'})
    res.write(homelogic)
    res.end()
   }

   else {
    res.writeHead(400, {'content-type':'text/html'})
    res.write('<h3>Page not found</h3>')
    res.end()
   }
})

server.listen(5000)