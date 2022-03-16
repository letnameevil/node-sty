const why = 'why'

// 创建Buffer
const buffer = new Buffer(why)

console.log(buffer) // <Buffer 77 68 79> 用的十六进制表示的, 例如77对应199就是字母why对应的ASCII码

// 创建的第二种方式
const buffer1 = Buffer.from(why)

// unicode是一种标注， utf-8 gbk 等是对unicode的实现， 不同就是相同字符在内存中占用的字节
console.log(buffer1)

console.log(buffer1.toString()) // 将buffer转换为字符串


