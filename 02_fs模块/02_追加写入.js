const fs = require('fs')

/* fs.appendFile('./座右铭.txt', '，择其善者而从之，择其不善者而改之', (err) => {
    if (err) {
        console.log('追加写入失败');
        return
    } else {
        console.log('追加写入成功');
    }
}) */

// fs.appendFileSync('./座右铭.txt', '\r\n温故而知新，可以为师也')

// writeFile实现追加写入
fs.writeFile('./座右铭.txt', 'wtf wtf wtf', { flag: 'a' }, (err) => {
    if (err) {
        console.log('追加写入失败');
        return
    }
    console.log('追加写入成功');
})