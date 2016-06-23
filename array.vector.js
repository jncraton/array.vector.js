((A,M) => {
  A.distSq = function (b) {
    return this.reduce((p,c,i) => p + M.pow((this[i]-b[i]),2), 0)
  }
  A.dist = function (b) { return M.sqrt(this.distSq(b)) }

  A.magSq = function () {
    return this.reduce((p,c) => p + (c*c), 0)
  }
  A.mag = function () { return M.sqrt(this.magSq()) }

  A.add = function(b) { return this.map((c,i,a) => a[i] + b[i]) }
  A.sub = function(b) { return this.map((c,i,a) => a[i] - b[i]) }
  A.mul = function(b) { return this.map((c,i,a) => a[i] * b) }
  A.div = function(b) { return this.map((c,i,a) => a[i] / b) }

  'zyxw'.split('').forEach((c,i) => {
    A[c] = function(v) {
      if (v) this[this.length - 1 - i] = v
      return this[this.length - 1 - i]
    }
  })

  'abs ceil floor max min round'.split(' ').forEach((f,i) => {
    A[f] = function(p) {
      return this.map((v) => v = M[f](v,p))
    }
  })
})(Array.prototype, Math)