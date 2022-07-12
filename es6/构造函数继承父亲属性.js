function Father(uname, age) {
    this.name = name
    this.age = age
}

Father.prototype.money = function() {
    console.log(1000000)
}


function Son(uname, age) {
    Father.call(this, uname, age)
}


Son.prototype = new Father()
Son.prototype.constructor = Son