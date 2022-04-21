var http = require('http')
var fs = require('fs')

http
.createServer(function (req, res) {
    fileStream.on('open', () => {
        fileStream.pipe(res)
            })
            //looks out for errors
            fileStream.on('error', (err) => {
                res.end(err)
            })
    // const text = fs.readFileSync('./content/big.txt', 'utf8')
    // res.end(text)
})
.listen(5000)
