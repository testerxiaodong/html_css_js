// 数组新增方法
// 1. forEach()
var arr = [1, 2, 3]
// 参数是一个回调函数， 回调函数第一个是值， 第二个是index，第三个是数组本身
arr.forEach(function(value, index, arr) {
    console.log('当前值是' + value)
    console.log('当前索引是' + index)
    console.log('当前数组是' + arr)
})

// 2. filter筛选数组，返回一个数组
var arr1 = [11, 22, 33, 44]
var filter_arr = arr1.filter(function(value, index) {
    return value > 30
})
console.log(filter_arr)

// 3. some是否有满足条件的，返回一个布尔值
// 找到满足条件的第一个元素就终止遍历，或能提高性能
var arr2 = [11, 22, 33, 44]
var flag = arr2.some(function(value, index) {
    return value > 50
})
console.log(flag)


// 新增字符串方法
// 1. trim去除前后空白字符
var str = '  哈哈  '
console.log(str)
var newStr = str.trim()
console.log(newStr)


// 新增对象方法
// 1.Object.defineProperty
var obj = {
    id: 1,
    pname: '小米',
    price: 1999,
    sing : function() {
        console.log(this + 'sing a song')
    }
}

Object.defineProperty(obj, 'price', {
    value : 999
    // value：设置属性的值
    // writeable：值是否可以重写
    // enumerate：值是否可以被枚举
    // configurable：是否可以被删除或者再次修改特性
})

console.log(obj.price)
// 2. Object.keys(obj), 返回一个数组
var objAttrs = Object.keys(obj)
console.log(objAttrs)