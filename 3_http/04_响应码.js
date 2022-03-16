const http = require('http')
const qs = require('querystring')

const server = http.createServer((req, res) => {
  if (req.url === '/login' && req.method === 'POST') {
    req.on('data', (data) => {
      console.log(data.toString())
      console.log( JSON.parse(data.toString()))
    })
  }
  
  // 设置响应码
  // res.statusCode = 304
  // res.writeHead(200)
  res.write("falil: 22")
  res.end()
  // res.end('success: 2000')
})

server.listen(8080, () => {
  console.log('localhost:8080')
})
