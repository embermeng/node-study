const http = require('http')

/* 
    创建服务对象
    request是请求报文的封装对象，response是响应报文的封装对象
    当服务接受了http请求后回调才执行
*/
const server = http.createServer((request, response) => {
    // 设置响应体并结束响应
    // response.end('Hello http server')
    response.setHeader('content-type', 'text/html;charset=utf-8')
    response.end('你好')
})

// 监听端口，启动服务
server.listen(9000, () => {
    console.log('服务已经启动');
})