const fs = require('fs')

// 通过编码解析显示的内容(采用utf-8的模式进行解码)
fs.readFile('./03.foo.txt', 'utf-8', (err, data) => {
  console.log(data)
})

// 不解析的话就存在buffer中
fs.readFile('./03.foo.txt', (err, data) => {
  console.log(data)
})

// 读取图片文件
fs.readFile('./images/Buffer和二进制.png', (err, data) => {
  console.log(data)

  // 读到图片文件后，好可以写入
  fs.writeFile('./foo.png', data, (err, data) => {
    console.log(err)
    console.log(data)
  })
})




