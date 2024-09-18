const fs = require('fs')

// unlink, unlinkSync
fs.unlink('./观书有感.txt', (err) => {
    if (err) {
        console.log('删除失败');
        return
    }
    console.log('删除成功');
})

// rm, rmSync
fs.rm('./论语.txt', (err) => {
    if (err) {
        console.log('删除失败');
        return
    }
    console.log('删除成功');
})