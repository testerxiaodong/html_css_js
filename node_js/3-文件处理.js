const fs = require('fs')

// 先读取成绩文件
// fs.readFile('./files/成绩.txt', 'utf-8', function(err, dataStr) {
//     if (err) {
//         console.log('读取文件失败' + err.message);
//     } else {
//         var dataArray = dataStr.split(' ')
//         const arrNew = []
//         dataArray.forEach(value => {
//             arrNew.push(value.replace('=', ':'))
//         })
//         const newStr = arrNew.join('\n')
//         fs.writeFile('./files/成绩-ok.txt', newStr, 'utf-8', function(err) {
//             if (err) {
//                 return console.log('文件写入失败' + err.message)
//             }
//         })
//     }
// })
fs.readFile(__dirname + '/files/成绩.txt', 'utf-8', function(err, dataStr) {
    if (err) {
        console.log('读取文件失败' + err.message);
    } else {
        console.log('读取文件成功'+ dataStr);
        var dataArray = dataStr.split(' ')
        const arrNew = []
        dataArray.forEach(value => {
            arrNew.push(value.replace('=', ':'))
        })
        const newStr = arrNew.join('\n')
        fs.writeFile('./files/成绩-ok.txt', newStr, 'utf-8', function(err) {
            if (err) {
                return console.log('文件写入失败' + err.message)
            }
            console.log('写入文件成功');
        })
    }
})