var express = require('express');
var router = express.Router();

// 导入formidable
const formidable = require('formidable');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Express' });
});

// 显示网页的表单
router.get('/portrait', (req, res) => {
    res.render('portrait')
});

// 处理文件上传
router.post('/portrait', (req, res) => {
    const form = formidable({
        multiples: true,
        // 设置上传文件的保存目录
        uploadDir: __dirname + '/../public/images',
        // 保持文件后缀
        keepExtensions: true
    });

    form.parse(req, (err, fields, files) => {
        if (err) {
            next(err);
            return;
        }
        // console.log(fields); // text radio checkbox select类型
        // console.log(files); // file类型

        // 服务器保存该图片的访问URL：/images/xxxxxxx.jpg
        let url = '/images/' + files.portrait.newFilename
        // 保存在数据库中......
        res.send(url)
    });
});

module.exports = router;
