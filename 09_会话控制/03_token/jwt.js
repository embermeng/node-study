const jwt = require('jsonwebtoken');

// 创建(生成)token
// const token = jwt.sign(用户数据, 加密字符串, 配置对象)
const token = jwt.sign(
    {
        username: 'zhangsan'
    },
    'atguigu',
    {
        expiresIn: 60 * 5, // 单位是秒
    }
)
console.log(token);

const t = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InpoYW5nc2FuIiwiaWF0IjoxNzI2OTMxNDg0LCJleHAiOjE3MjY5MzE3ODR9.SN0oWLp28AYOCwCUY3OrjhyukkcQURJCrGc1Di9ENeY'

// 校验token
jwt.verify(t, 'atguigu', (err, data) => {
    if (err) {
        console.log('校验失败');
        return
    }
    console.log(data);
})
