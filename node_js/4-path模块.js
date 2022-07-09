const path = require('path')

const pathStr = path.join('/a', '/b/c')

console.log(pathStr)


console.log(__dirname)


const baseName = path.basename(__dirname)

console.log(baseName)

const pathExt = '/a/b/c/1.txt'

console.log(path.extname(pathExt))