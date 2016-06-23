Array.prototype.distanceSq = function (b) {
  return this.reduce((prev,cur,i) => {
    return prev + (this[i]-b[i])*(this[i]-b[i])
  }, 0)
}

Array.prototype.magnitudeSq = function () {
  return this.reduce((prev,cur) => {
    return prev + (cur*cur)
  }, 0)
}

Array.prototype.magnitude = function () { return Math.sqrt(this.magnitudeSq()) }