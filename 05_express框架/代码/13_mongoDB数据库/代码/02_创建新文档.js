const mongoose = require('mongoose');

// 连接mongodb服务，bilibili是数据库名称
mongoose.connect('mongodb://127.0.0.1:27017/bilibili');

// 连接成功的回调
mongoose.connection.once('open', () => {
    // 1. 创建文档的结构对象，设置集合中的文档的属性以及属性值的类型
    const BookSchema = new mongoose.Schema({
        name: String,
        author: String,
        price: Number
    })

    // 2. 创建模型对象————对文档操作的封装对象(其实相当于Class，里面有属性和方法)
    const BookModel = mongoose.model('books', BookSchema)

    // 
})

// 连接错误的回调
mongoose.connection.on('error', () => {
    console.log('连接失败！');
})

// 连接关闭的回调
mongoose.connection.on('close', () => {
    console.log('连接关闭！');
})