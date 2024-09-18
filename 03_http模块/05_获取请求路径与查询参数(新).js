const http = require('http')

const server = http.createServer((request, response) => {
    // 实例化URL的对象
    // let url = new URL('http://127.0.0.1:9000/search?wd=abcdefg')
    // let url = new URL('/search?wd=abcdefg', 'http://127.0.0.1:9000')
    let url = new URL(request.url, 'http://127.0.0.1:9000')

    console.log(url);
    console.log('查询参数', url.searchParams.get('wd'));
    response.end('url new')
})

server.listen(9000, () => {
    console.log('服务已经启动');
})