const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain;charset=utf-8');
  fs.readFile('./01_foo.txt', (err, data) => {
    console.log(data)
    // res.end('程世坏')  // res.write res.close 两个方法的合体
    res.end(data)
  })
})

// 写端口不要写1024以下的  0 - 65535
server.listen(3000, '0.0.0.0', () => {
  console.log('服务器启动成功。。。')
})
