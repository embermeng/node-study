// buffer与字符串的转换
// let buf_4 = Buffer.from([105, 108, 111, 118, 101, 121, 111, 117])
// 转化为utf-8
// console.log(buf_4.toString());

// let buf = Buffer.from("nodejs")
// 这里的toString是进制转换
// console.log(buf[0].toString(2)); // 01101110
// console.log(buf);

// buf[0] = 95
// console.log(buf.toString());

// 溢出
// let buf = Buffer.from('nodejs')
// buf[0] = 361 // node会舍弃高位保留低位
// console.log(buf);

// 中文
let buf = Buffer.from('你好')
console.log(buf);
