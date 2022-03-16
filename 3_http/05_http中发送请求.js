const http = require('http')
// http 中发送 GET 请求
// http.get('http://localhost:8080', (res) => {
//   res.setEncoding('utf-8')
//   res.on('data', data => {
//     console.log(data)
//   })

//   res.on('end', () => {
//     console.log('获取到了所有的结果')
//   })
// })

// http 中发送 POST请求
const req = http.request(
  {
    method: 'POST',
    hostname: 'localhost',
    port: 8080,
  },
  (res) => {
    res.on('data', (data) => {
      console.log(data.toString())
    })

    res.on('end', () => {
      console.log('获取到了所有的结果')
    })
  }
)

req.end()
