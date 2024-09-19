const mongoose = require('mongoose');

// 连接mongodb服务，bilibili是数据库名称
mongoose.connect('mongodb://127.0.0.1:27017/bilibili');

// 连接成功的回调
mongoose.connection.once('open', async () => {
    // 1. 创建文档的结构对象，设置集合中的文档的属性以及属性值的类型
    const BookSchema = new mongoose.Schema({
        name: {
            type: String,
            required: true, // 该属性必须不为空
            unique: true // 设置为独一无二的
        },
        author: {
            type: String,
            default: '匿名' // 默认值
        },
        style: {
            type: String,
            enum: ['都市', '校园', '言情', '恐怖'] // 枚举值
        },
        price: Number
    })

    // 2. 给Schema定义方法
    BookSchema.methods.sell = function () {
        console.log(`${this.name}被${this.author}卖了${this.price}元`);
    }

    // 3. 创建模型对象————对文档操作的封装对象(其实相当于Class，里面有属性和方法)，books是表名，保存时如果数据库中没有这个表会自动创建
    const BookModel = mongoose.model('books', BookSchema)

    // 4. 实例化一个Book对象
    const longzu1 = new BookModel({
        name: '龙族Ⅰ 火之晨曦',
        author: '江南',
        style: '校园',
        price: '30'
    })

    // 5. 保存数据到数据库
    try {
        await longzu1.save()
    } catch (error) {
        console.log(error);
        console.log("插入失败！");
    }
})

// 连接错误的回调
mongoose.connection.on('error', () => {
    console.log('连接失败！');
})

// 连接关闭的回调
mongoose.connection.on('close', () => {
    console.log('连接关闭！');
})