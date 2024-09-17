const http = require('http')
const fs = require('fs');

const server = http.createServer((request, response) => {
    let html = fs.readFileSync(__dirname + '/08_table.html')

    response.end(html)
})

server.listen(80, () => {
    console.log('服务已经启动');
})
