const fs = require('fs')

const reader = fs.createReadStream('./01foo.txt', {
  // start: 3,
  // end: 9,
  highWaterMark: 3, // 每个buffer放几个字节
})

// 数据读取事件
reader.on('data', (data) => {
  console.log(data)

  reader.pause()

  setTimeout(() => {
    reader.resume()
  }, 1000)
})

// 文件被打开执行的回调
reader.on('open', () => {})

// 文件被关闭
reader.on('close', () => {})

fs.readFile('./01foo.txt', (err, data) => {
  console.log(data)
})
