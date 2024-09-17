/* 
    伪代码
*/

function require(file) {
    // 1. 将相对路径转为绝对路径，定位目标文件
    let absolutePath = path.resolve(__dirname, file)

    // 2. 缓存检测
    if (caches[absolutePath]) {
        return caches[absolutePath]
    }

    // 3. 读取目标文件代码
    let code = fs.readFileSync(absolutePath).toString()

    // 4. 包裹为一个函数并执行这个文件里的代码（自执行函数）

    // 5. 缓存模块的值
    caches[absolutePath] = module.exports

    // 6. 返回 module.exports 的值
    return module.exports
}