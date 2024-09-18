const http = require('http')
const fs = require('fs');
const path = require('path');

const mimes = {
    html: 'text/html',
    css: 'text/css',
    js: 'text/javascript',
    png: 'image/png',
    jpg: 'image/jpeg',
    gif: 'image/gif',
    mp4: 'video/mp4',
    mp3: 'audio/mpeg',
    json: 'application/json'
}

const server = http.createServer((request, response) => {
    if (request.method !== 'GET') {
        response.statusCode = 405
        response.end("<h1>405 Method Not Allowed</h1>")
        return
    }
    let { pathname } = new URL(request.url, 'http://127.0.0.1')
    if (pathname === '/')
        pathname += 'index.html'
    const root = __dirname + '/page'
    const filePath = root + pathname

    fs.readFile(filePath, (err, data) => {
        if (err) {
            console.log(err);
            response.setHeader('content-type', 'text/html;charset=utf-8')
            // 判断错误代号
            switch (err.code) {
                case 'ENOENT':
                    response.statusCode = 404
                    response.end("<h1>404 NOT FOUND</h1>")
                case 'EPERM': // 文件没权限访问
                    response.statusCode = 403
                    response.end("<h1>403 Forbidden</h1>")
                default:
                    response.statusCode = 500
                    response.end("<h1>Internal Server Error</h1>")
            }
            return
        }
        // 根据文件后缀名设置响应头
        let ext = path.extname(filePath).slice(1)
        let type = mimes[ext]
        if (type) {
            if (ext === 'html') {
                response.setHeader('content-type', type + ';charset=utf-8')
            } else {
                response.setHeader('content-type', type)
            }
        } else {
            response.setHeader('content-type', 'application/octet-stream')
        }
        response.end(data)
    })
})

server.listen(80, () => {
    console.log('服务已经启动');
})
