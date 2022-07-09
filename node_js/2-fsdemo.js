const fs = require('fs')
// 三个参数path：读取文件的路径
// 编码格式：默认utf-8
fs.readFile('./files/11.txt', 'utf-8', function(err, dataStr) {
    // 读取成功，err为null
    if (err) {
        console.log('读取文件失败' + err.message);
    } else {
        console.log(dataStr);
    }
    // 读取失败，dataStr为undefined
})

// 写入文件内容
// 参数一：文件路径
// 参数二：写入的数据
// 参数三：编码格式
// 参数四：回调函数
var data = 'abcd'
fs.writeFile('./files/12.txt', data, function(err) {
    if(err) {
        console.log('写入文件失败' + err)
    } else {
        console.log('文件写入成功')
    }
})