const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    let data = fs.readFileSync('./06.前端请求图片.html')
    return res.end(data)
  }

  if (req.url === '/logo') {
    let data = fs.readFileSync('./foo.png')
    return res.end(data)
  }

  res.end('请请求正确的地址')
})

server.listen(3333, () => {
  console.log('3333')
})
