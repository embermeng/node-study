const http = require('http')

const server = http.createServer((request, response) => {
    response.setHeader('content-type', 'text/html;charset=utf-8')

    let { method } = request
    let { pathname } = new URL(request.url, 'http://127.0.0.1:9000')

    console.log(method, pathname);

    if (method === 'GET' && pathname === '/login') {
        response.end('登录页面')
    } else if (method === 'GET' && pathname === '/reg') {
        response.end('注册页面')
    } else {
        response.end('not found')
    }
})

server.listen(9000, () => {
    console.log('服务已经启动');
})