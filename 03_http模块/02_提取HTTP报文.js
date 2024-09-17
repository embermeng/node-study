const http = require('http')

const server = http.createServer((request, response) => {
    // 获取请求方法
    // console.log(request.method);
    
    // 获取请求url
    // console.log(request.url);
    
    // 获取http协议版本号
    // console.log(request.httpVersion);

    // 获取http请求头
    // console.log(request.headers);
    
    response.end('http')
})

server.listen(9000, () => {
    console.log('服务已经启动');
})