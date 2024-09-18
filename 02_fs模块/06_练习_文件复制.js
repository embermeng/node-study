const fs = require('fs')
const process = require('process')

// 方式一 readFile：会把所有文件内容读到内存中，消耗很大内存资源
/* let data = fs.readFileSync('../资料/asmr.mp4')

fs.writeFileSync('../资料/asmr_2.mp4', data)
console.log(process.memoryUsage()); // 122556416字节 */


// 方式二 流式操作：理想状态下只需要64KB的内存空间就可以完成复制
const rs = fs.createReadStream('../资料/asmr.mp4')

const ws = fs.createWriteStream('../资料/asmr_3.mp4')

/* rs.on('data', (chunk) => {
    ws.write(chunk)
})

rs.on('end', () => {
    console.log(process.memoryUsage()); // 60350464字节
}) */

// 流式简易操作，把读流的数据通过管道给写流
rs.pipe(ws)