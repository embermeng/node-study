const express = require('express');
const router = express.Router();
const md5 = require('md5');

const UserModel = require('../../models/UserModel');

router.get('/reg', (req, res) => {
    res.render('auth/reg')
})

router.post('/reg', async (req, res) => {
    // 做表单验证...

    try {
        let data = await UserModel.create({
            ...req.body,
            password: md5(req.body.password)
        })
        res.render('success', { msg: '注册成功', url: '/login' })
    } catch (error) {
        console.log(error);
        res.status(500).send('注册失败！')
    }
    res.send('test')
})

router.get('/login', (req, res) => {
    res.render('auth/login')
})

router.post('/login', async (req, res) => {
    const { username, password } = req.body
    // 查询数据库
    try {
        let data = await UserModel.findOne({ username, password: md5(password) })
        console.log(data);
        if (!data) {
            res.send('账号或密码错误')
        } else {
            // 写入session
            req.session.username = data.username
            req.session._id = data._id
            res.render('success', { msg: '登录成功', url: '/account' })
        }
    } catch (error) {
        console.log(error);
        res.status(500).send('注册失败！')
    }
})

router.get('/logout', (req, res) => {
    // 销毁session
    req.session.destroy(() => {
        res.render('success', { msg: '退出成功', url: '/login' })
    })
})

module.exports = router;
