const http = require('http')

const server = http.createServer()

server.on('request', (req, res) => {
    console.log('Someone request server')
})

server.listen(80, () => {
    console.log('http server running at http://127.0.0.1')
})