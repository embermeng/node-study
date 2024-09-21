const express = require('express');
const router = express.Router();
const dayjs = require('dayjs');

const AccountModel = require('../../models/AccountModel');

// 获取记账本列表数据
router.get('/account', async function (req, res, next) {
    try {
        let data = await AccountModel.find().sort({ time: -1 })
        res.json({
            code: 200,
            msg: '读取成功',
            data
        })
    } catch (error) {
        res.json({
            code: 500,
            msg: '读取失败',
            data: null
        })
    }
});

// 新增账单
router.post('/account', async (req, res) => {
    try {
        let data = await AccountModel.create({
            ...req.body,
            time: dayjs(req.body.time).toDate()
        })
        res.json({
            code: 200,
            msg: '创建成功',
            data
        })
    } catch (error) {
        res.json({
            code: 500,
            msg: '创建失败',
            data: null
        })
    }
})

// 删除账单
router.delete('/account/:id', async (req, res) => {
    const id = req.params.id
    // 删除
    try {
        let data = await AccountModel.deleteOne({ _id: id })
        res.json({
            code: 200,
            msg: '删除成功',
            data
        })
    } catch (error) {
        res.json({
            code: 500,
            msg: '删除失败',
            data: null
        })
    }
});

// 获取单个账单
router.get('/account/:id', async (req, res) => {
    const id = req.params.id
    try {
        let data = await AccountModel.findById(id)
        res.json({
            code: 200,
            msg: '获取单个账单成功',
            data
        })
    } catch (error) {
        res.json({
            code: 500,
            msg: '获取单个账单失败',
            data: null
        })
    }
})

// 更新单个账单信息
router.patch('/account/:id', async (req, res) => {
    const { id } = req.params
    try {
        let data = await AccountModel.updateOne({ _id: id }, req.body)
        try {
            // 再次查询数据库，获取单条数据
            let data2 = await AccountModel.findById(id)
            res.json({
                code: 200,
                msg: '更新成功',
                data: data2
            })
        } catch (error) {
            res.json({
                code: 500,
                msg: '读取失败',
                data: null
            })
        }
    } catch (error) {
        res.json({
            code: 500,
            msg: '更新失败',
            data: null
        })
    }
})
module.exports = router;
