Array.prototype.distSq = function (b) {
  return this.reduce((prev,cur,i) => prev + (this[i]-b[i])*(this[i]-b[i]), 0)
}

Array.prototype.magSq = function () {
  return this.reduce((prev,cur) => prev + (cur*cur), 0)
}

Array.prototype.add = function(b) { return this.map((cur,i) => this[i] + b[i]) }
Array.prototype.sub = function(b) { return this.map((cur,i) => this[i] - b[i]) }
Array.prototype.mul = function(b) { return this.map((cur,i) => this[i] * b) }
Array.prototype.div = function(b) { return this.map((cur,i) => this[i] / b) }

;['z','y','x','w'].forEach((dim,i) => {
  Array.prototype[dim] = function(val) {
    if (val) this[[this.length - 1 - i]] = val
    return this[[this.length - 1 - i]]
  }
})

;['abs','ceil','floor','max','min','round'].forEach((fn,i) => {
  Array.prototype[fn] = function(param) {
    return this.map((val) => val = Math[fn](val,param))
  }
})

Object.keys(Array.prototype).forEach((method) => {
  if (method.endsWith('Sq')) {
    Array.prototype[method.slice(0, -2)] = function (b) {
      return Math.sqrt(this[method](b))
    }
  }
})