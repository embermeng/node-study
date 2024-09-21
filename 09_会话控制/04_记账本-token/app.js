const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const session = require("express-session");
const MongoStore = require('connect-mongo');
const {DB_HOST, DB_PORT, DB_NAME} = require('./config/config');

// 网页文件的接口
const indexRouter = require('./routes/web/index');
const authRouter = require('./routes/web/auth');

// 请求的接口
const accountRouter = require('./routes/api/account');
const authApiRouter = require('./routes/api/auth');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// session的中间件
app.use(session({
    name: 'sid', //设置cookie的name，默认值是：connect.sid
    secret: 'atguigu', //参与加密的字符串（又称签名）, 加盐
    saveUninitialized: false,  //是否为每次请求都设置一个cookie用来存储session的id, 用户不带session设置的cookie数据时，服务端不返回set-cookie
    resave: true, //是否在每次请求时重新保存session
    store: MongoStore.create({ mongoUrl: `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}` }),  //数据库的连接配置
    cookie: {
        httpOnly: true, // 开启后前端无法通过 JS 操作
        maxAge: 1000 * 60 * 60 * 24 * 7 // 这一条 是控制 sessionID 的过期时间的！！！
    }
}))

app.use('/', indexRouter);
app.use('/api', accountRouter)

app.use('/', authRouter)
app.use('/api', authApiRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    // next(createError(404));
    // 响应404
    res.render('404')
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
