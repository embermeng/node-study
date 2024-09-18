const path = require('path')

// resolve：拼接绝对路径
// console.log(path.resolve(__dirname, 'index.html'));

// sep：当前系统的路径分隔符
// console.log(path.sep);

// parse：分析路径的信息
let str = 'f:\\study\\NodeJS\\node_study\\02_fs模块\\index.html'
// console.log(path.parse(str));

// basename：获取文件名
// console.log(path.basename(str));

// dirname：获取文件夹路径部分
// console.log(path.dirname(str));

// extname：获取文件扩展名
console.log(path.extname(str));
