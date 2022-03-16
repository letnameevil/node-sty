const http = require('http')
const qs = require('querystring')

const server = http.createServer((req, res) => {
  console.log(req.headers)
  if (req.url === '/login' && req.method === 'POST') {
    req.on('data', (data) => {
      console.log(data.toString())
      console.log( JSON.parse(data.toString()))
    })
  }
  res.write("falil: 22")
  // res.end('success: 2000')
  res.end()
})

server.listen(8080, () => {
  console.log('localhost:8080')
})
