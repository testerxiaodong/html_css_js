class Father {
    constructor(x, y) {
        this.x = x
        this.y = y
    }

    sum() {
        return this.x + this.y
    }

    sing () {
        console.log('sing a song')
    }
 }

 class Son extends Father {
    constructor(x, y) {
        super(x, y) // 调用父类的构造函数
        super.sing()
        console.log(this)
    }
 }

 var son = new Son(1, 2)
 console.log(son.sum())
 console.log(son.x)
 console.log(son.y)