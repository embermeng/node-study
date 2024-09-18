const express = require('express');

// 创建应用对象
const app = express()

// 创建路由
app.get('/:id.html', (req, res) => {
    res.setHeader('content-type', 'text/html;charset=utf-8')

    // 获取路由参数：params存储所有路由参数
    console.log(req.params.id);
    
    res.end('商品详情')
})

// 监听端口，启动服务
app.listen(3000, () => {
    console.log('服务已经启动，端口3000正在监听中...');
})
