Array.prototype.sum = function() {
    var sum = 0;
    for (let i=0; i<this.length; i++) {
        sum += this[i];
    }
    console.log(sum)
}

var arr = new Array(1, 2, 3)
arr.sum()