Array.prototype.distSq = function (b) {
  return this.reduce((p,c,i) => p + (this[i]-b[i])*(this[i]-b[i]), 0)
}

Array.prototype.magSq = function () {
  return this.reduce((p,c) => p + (c*c), 0)
}

Array.prototype.add = function(b) { return this.map((c,i) => this[i] + b[i]) }
Array.prototype.sub = function(b) { return this.map((c,i) => this[i] - b[i]) }
Array.prototype.mul = function(b) { return this.map((c,i) => this[i] * b) }
Array.prototype.div = function(b) { return this.map((c,i) => this[i] / b) }

'zyxw'.split('').forEach((c,i) => {
  Array.prototype[c] = function(v) {
    if (v) this[this.length - 1 - i] = v
    return this[this.length - 1 - i]
  }
})

;['abs','ceil','floor','max','min','round'].forEach((f,i) => {
  Array.prototype[f] = function(p) {
    return this.map((v) => v = Math[f](v,p))
  }
})

Object.keys(Array.prototype).forEach((f) => {
  if (f.endsWith('Sq')) {
    Array.prototype[f.slice(0, -2)] = function (b) {
      return Math.sqrt(this[f](b))
    }
  }
})