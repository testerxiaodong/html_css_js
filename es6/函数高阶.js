// 定义函数
// 利用 new Function('参数一‘, '参数二', '函数体')
var fun = new Function('a', 'b', 'console.log(a + b)')
fun(1, 2)

// 所有函数都是Function对象的实例
console.log(fun.__proto__ === Function.prototype)


// 函数调用

// 1. 普通函数 window
function f1() {
    console.log('我是函数' + f1)
}
f1();

// 2. 对象的方法 对象
var obj = {
    sing : function() {
        console.log('sing a song')
    }
}

obj.sing();

// 构造函数 实例对象
function Star(uname, age) {
    this.uname = uname;
    this.age = age;
    this.sing = function() {
        console.log(uname + 'sing a song')
    }
}

var star = new Star('刘德华', 18);

// 立即执行函数 window
(function(x, y) {
    console.log(x + y)
})(1, 2);

// 绑定事件函数 绑定事件对象

// 定时器函数 window

// 箭头函数
// 箭头函数不绑定this，没有自己的this关键字，指向定义位置中的this
const fn4 = () => {
    console.log(123)
}

fn4()

// 剩余参数
const fn5 = (first, ...args) => {
    console.log(first)
    console.log(args)
}

fn5(10, 20, 30)