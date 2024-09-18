const fs = require('fs')

// 创建读取流对象
const rs = fs.createReadStream('../资料/asmr.mp4')

console.log(rs);

// 绑定data事件，chunk块儿 大块儿
rs.on('data', (chunk) => {
    // 一次读64KB => 65536字节
    // console.log(chunk.length);
    // console.log(chunk.toString());
})

rs.on('end', () => {
    console.log('读取完成');
})