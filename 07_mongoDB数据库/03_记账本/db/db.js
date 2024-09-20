/**
 * 
 * @param {*} resolve 数据库连接成功的回调
 * @param {*} reject 数据库连接失败的回调
 */
module.exports = function (resolve, reject) {
    if (typeof reject !== 'function') {
        reject = () => console.log('连接失败！');
    }

    const mongoose = require('mongoose');

    const { DB_HOST, DB_PORT, DB_NAME } = require('../config/config');

    // 连接mongodb服务，bilibili是数据库名称
    mongoose.connect(`mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`);

    // 连接成功的回调
    mongoose.connection.once('open', async () => {
        resolve()
    })

    // 连接错误的回调
    mongoose.connection.on('error', () => {
        console.log('连接失败！');
        reject()
    })

    // 连接关闭的回调
    mongoose.connection.on('close', () => {
        console.log('连接关闭！');
    })
}
