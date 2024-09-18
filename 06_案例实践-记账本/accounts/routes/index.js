const express = require('express');
const router = express.Router();
const low = require('lowdb')
const shortid = require('shortid');

const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync(__dirname + '/../data/db.json')
const db = low(adapter)

// 记账本的列表
router.get('/account', function (req, res, next) {
    // 获取所以账单信息
    const accounts = db.get('accounts').value()
    console.log(accounts);

    res.render('list', { accounts });
});
// 添加记录页
router.get('/account/create', function (req, res, next) {
    res.render('create');
});

// 新增记录
router.post('/account', (req, res) => {
    // 生成id
    const id = shortid.generate()
    // 写入数据
    db.get('accounts').unshift({ id, ...req.body }).write()
    // 成功提醒
    res.render('success', { msg: '添加成功！', url: '/account' })
})

// 删除记录
router.get('/account/:id', (req, res) => {
    const id = req.params.id
    console.log(id);
    
    // 删除
    db.get('accounts').remove({ id }).write()
    res.render('success', { msg: '删除成功！', url: '/account' })
});

module.exports = router;
