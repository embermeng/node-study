const express = require('express');

const router = express.Router()

// 后台
router.get('/admin', (req, res) => {
    res.send('后台首页')
})
router.get('/setting', (req, res) => {
    res.send('后台设置')
})

// 暴露router
module.exports = router