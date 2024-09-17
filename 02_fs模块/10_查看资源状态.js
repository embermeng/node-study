const fs = require('fs')

fs.stat('../资料/asmr.mp4', (err, data) => {
    if(err) {
        console.log('操作失败');
        return
    }
    console.log(data);
    // isFile查看资源是不是文件
    console.log(data.isFile());
    // isDirectory
    console.log(data.isDirectory());
})