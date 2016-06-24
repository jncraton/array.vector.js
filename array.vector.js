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

Array.prototype.x = function (v) { 
  if (v) this[0] = v
  return this[0]
}
Array.prototype.y = function (v) { 
  if (v) this[1] = v
  return this[1]
}
Array.prototype.z = function (v) { 
  if (v) this[2] = v
  return this[2]
}

;['abs','ceil','floor','max','min','round'].forEach(function (f) {
  Array.prototype[f] = function (b) { return this.map((c,i,a) => Math[f](c,b)) }
})