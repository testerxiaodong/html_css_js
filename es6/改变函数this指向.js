// call
// fun.call(obj, 参数， 参数)
// 改变this指向，执行函数，主要用于继承
var obj = {
    name: 'andy'
}

function fn() {
    console.log(this)
}
fn()
fn.call(obj)

// apply
// 调用函数， 改变this指向
// 传参列表为数组，主要应用于数组
console.log(Math.max(...[1, 2, 3]))


// bind
// 不调用函数， 返回原函数拷贝