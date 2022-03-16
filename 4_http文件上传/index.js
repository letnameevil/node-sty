const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
  // 异步监听
  let body = ''
  req.on('data', (data) => {
    console.log(data.toString())
    
  })

  req.on('end', () => {
    console.log('关闭')
  })

  res.end('ok')
})

server.listen(8080, () => {
  console.log(8080)
})
