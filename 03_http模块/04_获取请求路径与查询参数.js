const http = require('http')
// 导入url模块，更好处理路径和参数
const url = require('url')

const server = http.createServer((request, response) => {
    // let res = url.parse(request.url)
    // console.log(res);

    let res = url.parse(request.url, true)
    // 获得查询参数
    console.log(res.query.wd);

    response.end('url')
})

server.listen(9000, () => {
    console.log('服务已经启动');
})