const fs = require('fs')

// 重命名
/* fs.rename('./座右铭.txt', './论语.txt', (err) => {
    if (err) {
        console.log('操作失败');
        return
    }
    console.log('操作成功');
}) */

// 文件的移动
fs.rename('./test.txt', '../资料/test.txt', (err) => {
    if (err) {
        console.log('操作失败');
        return
    }
    console.log('操作成功');
})