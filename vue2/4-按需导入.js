// import { s1, s2, say } from "./3-按需导出.js"

// 可以使用as关键字重命名

// import { s1, s2 as s3, say } from "./3-按需导出.js"

// 按需导入可以和默认导入一起使用
import info, { s1, s2 as s3, say } from "./3-按需导出.js"
import "./5-直接导入并执行.js"

console.log(s1)

console.log(s3)

console.log(say)

console.log(info)