const mongoose = require('mongoose');
const db = require('./db/db');
const BookModel = require('./models/BookModel');

const resolve = async () => {
    console.log(await BookModel.find({ author: '余华' }));
}

const reject = () => {
    console.log('连接失败');
}

db(resolve, reject)