const fs = require('fs')

const writer = fs.createWriteStream('./bar.txt', {
  flags: 'a',
  start: 4,
})

writer.write('你好啊', (err) => {
  if (err) {
    console.log(err)
    return
  }

  console.log('写入成功')
})

writer.write('李银河', (err) => {
  if (err) {
    console.log(err)
    return
  }

  console.log('写入成功')
})

// writer.close()
writer.end('hello world') // 内容会自动调用close, 同时会关闭流

writer.on('close', () => {
  console.log('文件被关闭')
})
