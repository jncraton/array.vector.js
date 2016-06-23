Array.prototype.distanceSq = function (b) {
  return this.reduce((prev,cur,i) => {
    return prev + (this[i]-b[i])*(this[i]-b[i])
  }, 0)
}