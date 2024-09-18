const express = require('express');

// 1. 创建应用对象
const app = express()

// 2. 创建路由
app.get('/', (req, res) => {
    res.end('home')
})

app.get('/home', (req, res) => {
    res.end('hello express')
})

app.post('/login', (req, res) => {
    res.end('login')
})

app.all('/test', (req, res) => {
    res.end('test')
})

app.all('*', (req, res) => {
    res.end('404 NOT FOUND')
})

// 监听端口，启动服务
app.listen(3000, () => {
    console.log('服务已经启动，端口3000正在监听中...');
})
