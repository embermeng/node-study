const express = require('express');

const app = express()

// 声明中间件
app.use((req, res, next) => {
    // 检测请求头中的referer是否为127.0.0.1
    const referer = req.get('referer')
    if(referer) {
        const url = new URL(referer)
        const hostName = url.hostname
        console.log(hostName);

        if(hostName !== '127.0.0.1') {
            res.status(404).res.send('<h1>404 NOT FOUND</h1>')
            return
        }
    }
    next()
})

app.use(express.static(__dirname + '/public'))

app.listen(3000, () => {
    console.log("server is running");
})