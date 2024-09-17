function tiemo() {
    console.log('贴膜...');
}

function niejiao() {
    console.log('捏脚...');
}

// module.exports 暴露数据，可以暴露'任意'数据
/* module.exports = {
    tiemo,
    niejiao
} */

// exports 暴露数据
// exports.niejiao = niejiao
// exports.tiemo = tiemo

// exports = module.exports = {}
console.log(module.exports);
console.log(module.exports === exports);