const http = require('http')
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.statusCode = 200
        res.write('Hello World')
    } else if (req.url === '/api/courses') {
        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json')
        res.write(JSON.stringify([1, 2, 3]))
    } else {
        res.statusCode = 404
        res.write('Not Found')
    }
    res.end()
})
server.listen(5000, () => {
    console.log('Server is running on port 5000')
})