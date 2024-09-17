const express = require('express');

// 创建应用对象
const app = express()

// 创建路由
app.get('/response', (req, res) => {
    // 原生响应
    /* res.statusCode = 404
    res.statusMessage = 'fuck'
    res.setHeader('xxx', 'yyy')
    res.write('hello express')
    res.end('response') */

    // express响应
    /* res.status(500)
    res.set('xxx', 'yyy')
    res.send('你好 express') */
    // 还可以链式调用
    // res.status(500).set('xxx', 'yyy').send('你好 express')

    // express其他响应
    // 跳转响应
    // res.redirect('https://www.baidu.com')
    // 下载响应
    // res.download(__dirname + '/package.json')
    // JSON响应
    /* res.json({
        name: '尚硅谷',
        slogon: '让天下没有难学的技术'
    }) */
    // 响应文件内容
    res.sendFile(__dirname + '/01_form.html')
})

// 监听端口，启动服务
app.listen(3000, () => {
    console.log('服务已经启动，端口3000正在监听中...');
})
