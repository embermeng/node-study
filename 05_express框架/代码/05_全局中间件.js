/* 记录每个请求的url与IP */

const express = require('express');

// 创建应用对象
const app = express()


// 创建路由
app.get('/home', (req, res) => {
    res.send('前台首页')
})
app.get('/admin', (req, res) => {
    res.send('后台首页')
})

app.all('*', (req, res) => {
    res.send('404 not found')
})

// 监听端口，启动服务
app.listen(3000, () => {
    console.log('服务已经启动，端口3000正在监听中...');
})
