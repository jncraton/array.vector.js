Array.prototype.distSq = function (b) {
  return this.reduce((sum,cur,i,a) => sum + Math.pow(a[i]-b[i],2), 0)
}

Array.prototype.dist = function (b) { return Math.sqrt(this.distSq(b)) }

Array.prototype.magSq = function (b) {
  return this.reduce((sum,cur,i,a) => sum + (cur*cur), 0)
}

Array.prototype.mag = function (b) { return Math.sqrt(this.magSq(b)) }

Array.prototype.add = function (b) { return this.map((cir,i,a) => a[i] + b[i]) }
Array.prototype.sub = function (b) { return this.map((cur,i,a) => a[i] - b[i]) }
Array.prototype.mul = function (b) { return this.map((cur,i,a) => a[i] * b) }
Array.prototype.div = function (b) { return this.map((ccur,i,a) => a[i] / b) }

// Σaₐbₐ
Array.prototype.dot = function (b) {
  return this.reduce((sum,cur,i,a) => sum + a[i]*b[i], 0)
}

Array.prototype.cross = function (b) {
  return [
    this[1]*b[2] - this[2]*b[1],
    this[2]*b[0] - this[0]*b[2],
    this[0]*b[1] - this[1]*b[0]
  ]
}

Array.prototype.x = function (newVal) {
  if (newVal) this[0] = newVal
  return this[0]
}
Array.prototype.y = function (newVal) {
  if (newVal) this[1] = newVal
  return this[1]
}
Array.prototype.z = function (newVal) {
  if (newVal) this[2] = newVal
  return this[2]
}

Math.clamp = function (val, min, max) {
  return Math.max(min, Math.min(max, val))
}

;['abs','ceil','clamp','floor','max','min','round'].forEach(function (fn) {
  Array.prototype[fn] = function () {
    var args = Array.from(arguments)
    
    return this.map((cur,i,a) => Math[fn].apply(null, [cur].concat(args)))
  }
})