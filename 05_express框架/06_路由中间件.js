/*
    针对/admin /setting 的请求，要求URL携带code=521参数，未携带提示“暗号错误”
*/

const express = require('express');

// 创建应用对象
const app = express()

// 中间件
const checkCodeMiddleware = (req, res, next) => {
    if (req.query.code == 521) {
        next()
    } else {
        res.send('暗号错误')
    }
}

// 创建路由
app.get('/home', checkCodeMiddleware, (req, res) => {
    res.send('前台首页')
})
app.get('/admin', checkCodeMiddleware, (req, res) => {
    res.send('后台首页')
})
app.get('/setting', checkCodeMiddleware, (req, res) => {
    res.send('后台设置')
})

app.all('*', (req, res) => {
    res.send('404 not found')
})

// 监听端口，启动服务
app.listen(3000, () => {
    console.log('服务已经启动，端口3000正在监听中...');
})
