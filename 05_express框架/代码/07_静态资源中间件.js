/*
    针对/admin /setting 的请求，要求URL携带code=521参数，未携带提示“暗号错误”
*/

const express = require('express');

// 创建应用对象
const app = express()

/* 
    静态资源中间件设置
    注意事项：
        1. index.html是默认打开的资源
        2. 如果静态资源与路由规则同时匹配，谁先匹配谁就响应
        3. 路由响应动态资源，静态资源中间件响应静态资源
*/
app.use(express.static(__dirname + '/public'))

// 创建路由
app.get('/', (req, res) => {
    res.send('我才是首页')
})

app.all('*', (req, res) => {
    res.send('404 not found')
})

// 监听端口，启动服务
app.listen(3000, () => {
    console.log('服务已经启动，端口3000正在监听中...');
})
