// es6模块化规范是浏览器和服务端模块化规范开发规范

// 每个js文件都是一个独立的模块

// 导入其他模块成员使用关键字import

// 向外共享成员使用export关键字

let n1 = 10

let n2 = 20

function show() {}

// 使用export default 导出默认成员
export default {
    n1,
    show
}

// 默认导出与默认导入

// 按需导出与按需导入

// 直接导入并执行模块中代码