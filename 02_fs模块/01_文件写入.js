// 导入fs模块
const fs = require('fs')

// 写入文件
fs.writeFile('./座右铭.txt', '三人行，则必有我师焉', (err) => {
    // 写入失败，err是错误对象；写入成功，err是null
    if (err) {
        console.log('写入失败');
        return
    } else {
        console.log('写入成功');
    }
})

console.log("1 + 1");

// 同步写入
fs.writeFileSync('./座右铭.txt', '四人行，则必有我师焉')