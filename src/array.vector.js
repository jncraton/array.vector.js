Math.mul = function(a,b) { return a * b }
Math.div = function(a,b) { return a / b }

Math.clamp = function (val, min, max) {
  return Math.max(min, Math.min(max, val))
}

Object.getOwnPropertyNames(Math).forEach(function (fn) {
  Array.prototype[fn] = function () {
    var args = Array.from(arguments)
    
    return this.map(function(cur,i,a) { return Math[fn].apply(0, [cur].concat(args)) })
  }
})

Array.prototype.add = function (b) { return this.map(function(cur,i,a,x) { return a[i] + b[i] }) }
Array.prototype.sub = function (b) { return this.map(function(cur,i,a,x) { return a[i] - b[i] }) }

Array.prototype.mag = function () { return Math.sqrt(this.magSq()) }
Array.prototype.dist = function (b) { return Math.sqrt(this.distSq(b)) }

Array.prototype.distSq = function (b) {
  return this.reduce(function(sum,cur,i,a) {
    return sum + (a[i]-b[i])*(a[i]-b[i]) 
  }, 0)
}

Array.prototype.magSq = function () {
  return this.reduce(function(sum,cur,i,a) {
    return sum + (cur*cur)
  }, 0)
}

// Σaₐbₐ
Array.prototype.dot = function (b) {
  return this.reduce(function(sum,cur,i,a) { return sum + a[i]*b[i] }, 0)
}

Array.prototype.cross = function (b) {
  return [
    this[1]*b[2] - this[2]*b[1],
    this[2]*b[0] - this[0]*b[2],
    this[0]*b[1] - this[1]*b[0]
  ]
}

Array.prototype.x = function(newVal) {
  if(newVal) this[0] = newVal
  return this[0]
}

Array.prototype.y = function(newVal) {
  if(newVal) this[1] = newVal
  return this[1]
}

Array.prototype.z = function(newVal) {
  if(newVal) this[2] = newVal
  return this[2]
}

Array.prototype.norm = function () {
  return this.div(this.mag())
}