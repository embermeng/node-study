const mongoose = require('mongoose');

// 连接mongodb服务，bilibili是数据库名称
mongoose.connect('mongodb://127.0.0.1:27017/bilibili');

// 连接成功的回调
mongoose.connection.once('open', async () => {
    // 1. 创建文档的结构对象，设置集合中的文档的属性以及属性值的类型
    const BookSchema = new mongoose.Schema({
        name: String,
        author: String,
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
        price: '30'
    })
    console.log(longzu1);
    longzu1.sell();

    // 5. 保存数据到数据库
    // await longzu1.save()

    // 6. 查数据
    // 查所有数据
    // const myBooks = await BookModel.find()
    // console.log(myBooks);
    // 条件查询
    console.log(await BookModel.find({ name: '龙族Ⅱ 悼亡者之瞳' }));

    // 7. 关闭数据库连接，项目运行过程中，不会添加该代码
    // mongoose.disconnect()
})

// 连接错误的回调
mongoose.connection.on('error', () => {
    console.log('连接失败！');
})

// 连接关闭的回调
mongoose.connection.on('close', () => {
    console.log('连接关闭！');
})