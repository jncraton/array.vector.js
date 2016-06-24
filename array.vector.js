Array.prototype.distSq = function (b) {
  return this.reduce((p,c,i,a) => p + Math.pow(a[i]-b[i],2), 0)
}

Array.prototype.dist = function (b) { return Math.sqrt(this.distSq(b)) }

Array.prototype.magSq = function (b) {
  return this.reduce((p,c,i,a) => p + (c*c), 0)
}

Array.prototype.mag = function (b) { return Math.sqrt(this.magSq(b)) }

Array.prototype.add = function (b) { return this.map((c,i,a) => a[i] + b[i]) }
Array.prototype.sub = function (b) { return this.map((c,i,a) => a[i] - b[i]) }
Array.prototype.mul = function (b) { return this.map((c,i,a) => a[i] * b) }
Array.prototype.div = function (b) { return this.map((c,i,a) => a[i] / b) }

for (c of 'wxyz') ((c) => {
  Array.prototype[c] = function(v) {
    var j = this.length + c.charCodeAt(0) - 123
    return (this[j] = v || this[j])
  }
})(c)

for(f of 'abs ceil floor max min round'.split(' ')) Array.prototype[f] = Function('b', `return this.map((c,i,a) => Math.${f}(c,b))`)