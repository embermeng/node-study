const jwt = require('jsonwebtoken');
const { secret } = require('../config/config');

// 声明中间件
module.exports = (req, res, next) => {
    const token = req.get('token')
    if (!token) {
        return res.json({
            code: 500,
            msg: 'token缺失',
            data: null
        })
    } else {
        jwt.verify(token, secret, (err, data) => {
            // 检测token是否正确
            if (err) {
                return res.json({
                    code: 500,
                    msg: 'token校验失败',
                    data: null
                })
            } else {
                // 如果token校验成功, 保存用户信息
                req.user = data
                next()
            }
        })
    }
}