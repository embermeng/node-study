const http = require('http')

const server = http.createServer((request, response) => {
    // 设置响应状态码
    // response.statusCode = 404

    // 设置响应状态描述
    // response.statusMessage = 'wtf!!!!!!'

    // 响应头
    // response.setHeader('content-type', 'text/html;charset=utf-8')
    // response.setHeader('Server', 'Node.js')
    // response.setHeader('hhhhh', 'test test test')
    // response.setHeader('test', ['a', 'b', 'c'])

    // 响应体
    response.write('love ')
    response.write('love ')
    response.write('love ')

    response.end('response')
})

server.listen(80, () => {
    console.log('服务已经启动');
})