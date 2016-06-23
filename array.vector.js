Array.prototype.distSq = function (b) {
  return this.reduce((prev,cur,i) => {
    return prev + (this[i]-b[i])*(this[i]-b[i])
  }, 0)
}

Array.prototype.magSq = function () {
  return this.reduce((prev,cur) => {
    return prev + (cur*cur)
  }, 0)
}

Array.prototype.add = function(b) {
  return this.map((cur,i) => {
    return (this[i] + b[i])
  })
}

Object.keys(Array.prototype).forEach((method) => {
  if (method.endsWith('Sq')) {
    Array.prototype[method.slice(0, -2)] = function (b) { 
      return Math.sqrt(this[method](b))
    }
  }
})