// const tiemo = require('./me.js');

/* 
    省略后缀：js和json文件都可以省略
    如果文件名相同，会先找js文件
*/
const tiemo = require('./me');

tiemo()

// 导入其它类型的文件，会按照js规则导入
const test = require('./test.abc');

console.log(test);
