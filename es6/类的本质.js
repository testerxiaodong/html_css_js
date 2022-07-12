// 1. 构造函数有原型对象prototyoe
// 2. 构造函数原型对象prototype里面有constructor指向构造函数本身
// 3. 构造函数可以通过原型对象添加方法
// 4. 构造函数创建的实例对象有__proto__属性指向构造函数的原型对象

// ES6通过类实现面向对象编程
class Star {

}

console.log(Star.prototype)
console.log(Star.prototype.constructor === Star)

// 1. 类的本质还是一个函数 可以简单认为类就是构造函数的另一种写法

// 2. 类可以通过原型对象添加方法
Star.prototype.sing = function() {
    console.log('sing a song')
}

var ldh = new Star()
ldh.sing()