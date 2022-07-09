const fs = require('fs')

const path = require('path')

const regStyle = /<style>[\s\S]*<\/style>/

const regScript = /<script>[\s\S]*<\/script>/

fs.readFile(path.join(__dirname, './index.html'), 'utf-8', function(err, dataStr) {
    if (err) {
        return console.log('读取文件失败' + err.message);
    }
    console.log('读取文件成功'+ dataStr)
    resolveCss(dataStr)
    resolveJs(dataStr)
})


function resolveCss(htmlStr) {
    const r1 = regStyle.exec(htmlStr)
    const newStr = r1[0].replace('<style>', '').replace('</style>', '')
    fs.writeFile(path.join(__dirname, './demo/demo.css'), newStr, 'utf-8', function(err){
        if (err) {
            return console.log('写入文件失败' + err.message)
        }
        console.log('写入CSS文件成功')
    })
}

function resolveJs(htmlStr) {
    const r1 = regScript.exec(htmlStr)
    const newStr = r1[0].replace('<script>', '').replace('</script>', '')
    fs.writeFile(path.join(__dirname, './demo/demo.js'), newStr, 'utf-8', function(err){
        if (err) {
            return console.log('写入文件失败' + err.message)
        }
        console.log('写入JS文件成功')
    })
}

