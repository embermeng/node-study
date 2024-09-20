const mongoose = require('mongoose');
const db = require('./db/db');
const MovieModel = require('./models/MovieModel');

const resolve = async () => {
    let res = await MovieModel.create({ title: '让子弹飞', director: '姜文' })
    console.log(res);
}

// const reject = () => {}

db(resolve)
