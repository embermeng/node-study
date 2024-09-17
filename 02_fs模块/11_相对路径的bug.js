const fs = require('fs')

// 相对路径的参数物不是js文件的所在目录，而是命令行的工作目录
// fs.writeFileSync('./index.html', 'love')

// 换绝对路径解决: __dirname是'全局变量'，保存的是：所在文件的所在目录的绝对路径
// console.log(__dirname);
fs.writeFileSync(__dirname + '/index.html', 'love')

