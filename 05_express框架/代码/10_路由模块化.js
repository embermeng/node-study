const express = require('express');
const homeRouter = require('./routes/homeRouter');
const adminRouter = require('./routes/adminRouter');
// 创建应用对象
const app = express()

// 设置router
app.use(homeRouter)
app.use(adminRouter)

app.all('*', (req, res) => {
    res.send('404 not found')
})

// 监听端口，启动服务
app.listen(3000, () => {
    console.log('服务已经启动，端口3000正在监听中...');
})
