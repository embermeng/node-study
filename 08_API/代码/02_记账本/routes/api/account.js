const express = require('express');
const router = express.Router();
const dayjs = require('dayjs');

const AccountModel = require('../../models/AccountModel');

// 记账本的列表
router.get('/account', async function (req, res, next) {
    // 获取所有账单信息
    try {
        let data = await AccountModel.find().sort({ time: -1 })
        res.json({
            code: '0000',
            msg: '读取成功',
            data
        })
    } catch (error) {
        res.json({
            code: '1001',
            msg: '读取失败',
            data: null
        })
        // res.status(500).send('读取失败！')
    }
});

// 添加记录页
router.get('/account/create', function (req, res, next) {
    res.render('create');
});

// 新增记录
router.post('/account', async (req, res) => {
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
router.get('/account/:_id', async (req, res) => {
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
