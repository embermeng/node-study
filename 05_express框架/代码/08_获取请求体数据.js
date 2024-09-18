/* 
    按照要求搭建HTTP服务
    GET  /login 显示表单网页
    POST /login 获取表单中的“用户名”和“密码”
*/

const express = require('express');
const bodyParser = require('body-parser')

const app = express()

// 解析queryString格式的请求体的中间件
const urlencodedParser = bodyParser.urlencoded({ extended: false })

// 解析JSON格式的请求体的中间件
const jsonParser = bodyParser.json()

app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/08_form.html')
})

app.post('/login', urlencodedParser, (req, res) => {
    // urlencodedParser中间件会在req中增加body属性保存参数
    console.log(req.body);
    res.send('获取用户数据')
})

app.listen(3000, () => {
    console.log("server is running");
})