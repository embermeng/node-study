// 1. alloc
// 创建10个字节的buffer
let buf = Buffer.alloc(10)
console.log(buf);

// 2. allocUnsafe
// 创建的空间可能有旧数据
let buf_2 = Buffer.allocUnsafe(10000)
console.log(buf_2);

// 3. from
let buf_3 = Buffer.from('hello')
console.log(buf_3);
// 数组中每个数占一个字节
let buf_4 = Buffer.from([105, 108, 111, 118, 101, 121, 111, 117])
console.log(buf_4);