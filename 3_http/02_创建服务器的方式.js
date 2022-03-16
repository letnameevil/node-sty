const http = require('http')
const url = require('url')
const qs = require('querystring')

console.log(url.parse(`/index/html?username=cheng&age=22`))
const server1 = http.createServer((req, res) => {
  // console.log(req.url)
  // console.log(url.parse(req.url))
  // console.log(qs.parse(url.parse(req.url).query))
  res.end('fjsldkajfl')
})

server1.listen(8000, '0.0.0.0', () => {})

// const server2 = http.createServer((req, res) => {

// })

// server2.listen(8001, () => {

// })

const server2 = new http.Server((req, res) => {
  res.end('SERVER2')
})

server2.listen(8001, '127.0.0.1', () => {})
