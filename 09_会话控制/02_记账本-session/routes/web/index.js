const express = require('express');
const dayjs = require('dayjs');

const AccountModel = require('../../models/AccountModel');
const checkLoginMidWare = require('../../middlewares/checkLoginMidWare');

const router = express.Router();

// 首页路由规则
router.get('/', (req, res) => {
    // 重定向 /account
    res.redirect('/account')
})

// 记账本的列表
router.get('/account', checkLoginMidWare, async function (req, res, next) {
    // 获取所有账单信息
    try {
        let accounts = await AccountModel.find().sort({ time: -1 })
        res.render('list', { accounts, dayjs });
    } catch (error) {
        console.log(error);
        res.status(500).send('读取失败！')
    }
});

// 添加记录页
router.get('/account/create', checkLoginMidWare, function (req, res, next) {
    res.render('create');
});

// 新增记录
router.post('/account', checkLoginMidWare, async (req, res) => {
    // 插入数据
    try {
        let data = await AccountModel.create({
            ...req.body,
            time: dayjs(req.body.time).toDate()
        })
        console.log(data);
        // 成功提醒
        res.render('success', { msg: '添加成功！', url: '/account' })
    } catch (error) {
        res.status(500).send("插入失败！")
    }
})

// 删除记录
router.get('/account/:_id', checkLoginMidWare, async (req, res) => {
    const id = req.params._id
    console.log(id);

    // 删除
    try {
        let data = await AccountModel.deleteOne({ _id: id })
        console.log(data);
        res.render('success', { msg: '删除成功！', url: '/account' })
    } catch (error) {
        console.log(error);
        res.status(500).send('删除失败')
    }
});

module.exports = router;
