const express = require('express');
const md5 = require('md5');
const jwt = require('jsonwebtoken');
// 读取配置项
const { secret } = require('../../config/config');

const UserModel = require('../../models/UserModel');

const router = express.Router();

router.post('/login', async (req, res) => {
    const { username, password } = req.body
    // 查询数据库
    try {
        let data = await UserModel.findOne({ username, password: md5(password) })
        console.log(data);
        if (!data) {
            res.json({
                code: 500,
                msg: '用户名或密码错误',
                data: null
            })
        } else {
            // 创建当前用户token
            const token = jwt.sign({
                username: data.username,
                _id: data._id
            }, secret, {
                expiresIn: 60 * 60 * 24 * 7
            })

            // 响应token
            res.json({
                code: 200,
                msg: '登录成功',
                data: token
            })
        }
    } catch (error) {
        console.log(error);
        res.json({
            code: 500,
            msg: '数据库读取失败',
            data: null
        })
    }
})

router.post('/logout', (req, res) => {
    // 销毁session
    req.session.destroy(() => {
        res.render('success', { msg: '退出成功', url: '/login' })
    })
})

module.exports = router;
