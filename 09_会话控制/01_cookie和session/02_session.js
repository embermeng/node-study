const express = require('express');
const session = require("express-session");
const MongoStore = require('connect-mongo');

const app = express()
app.use(session({
    name: 'sid', //设置cookie的name，默认值是：connect.sid
    secret: 'atguigu', //参与加密的字符串（又称签名）, 加盐
    saveUninitialized: false,  //是否为每次请求都设置一个cookie用来存储session的id, 用户不带session设置的cookie数据时，服务端不返回set-cookie
    resave: true, //是否在每次请求时重新保存session
    store: MongoStore.create({ mongoUrl: 'mongodb://127.0.0.1:27017/bilibili' }),  //数据库的连接配置
    cookie: {
        httpOnly: true, // 开启后前端无法通过 JS 操作
        maxAge: 1000 * 60 * 5 // 这一条 是控制 sessionID 的过期时间的！！！
    }
}))

app.get('/', (req, res) => {
    res.send("home")
})

// session的设置
app.get('/login', (req, res) => {
    // username=admin&password=123456
    const { username, password } = req.query
    if (username === 'admin' && password === '123456') {
        // 设置session
        req.session.username = username
        req.session.uid = '358zxcaas'
        // 成功响应
        res.send('登录成功')
    } else {
        res.send('登录失败！')
    }
})

// session的读取
app.get('/cart', (req, res) => {
    /* 
        检测session是否存在用户数据
        进入这个回调时，中间件已经将当前用户的session从数据库中取出放到req.session中
    */
    if(req.session.username) {
        res.send(`购物车页面，欢迎您${req.session.username}`)
    } else {
        res.send('您还没登录')
    }
})

// session的销毁
app.get('/logout', (req, res) => {
    req.session.destroy(() => {
        res.send('退出登录成功')
    })
})

app.listen(3000)