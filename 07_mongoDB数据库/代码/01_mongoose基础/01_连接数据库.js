const mongoose = require('mongoose');

// 连接mongodb服务，bilibili是数据库名称
mongoose.connect('mongodb://127.0.0.1:27017/bilibili');

/* 
    设置回调
    once绑定的回调只执行一次，on绑定的会多次执行
*/
// 连接成功的回调
mongoose.connection.once('open', () => {
    console.log('连接成功！');
})

// 连接错误的回调
mongoose.connection.on('error', () => {
    console.log('连接失败！');
})

// 连接关闭的回调
mongoose.connection.on('close', () => {
    console.log('连接关闭！');
})

// 关闭mongodb连接
/* setTimeout(() => {
    mongoose.disconnect()
}, 2000); */