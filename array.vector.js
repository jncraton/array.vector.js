((A,M,F) => {
  A.distSq = F('this.reduce((p,c,i,a) => p + Math.pow(a[i]-b[i],2), 0)')
  A.dist = F('Math.sqrt(this.distSq(b))')

  A.magSq = F('this.reduce((p,c) => p + (c*c), 0)')
  A.mag = F('Math.sqrt(this.magSq())')

  A.add = F('this.map((c,i,a) => a[i] + b[i])')
  A.sub = F('this.map((c,i,a) => a[i] - b[i])')
  A.mul = F('this.map((c,i,a) => a[i] * b)')
  A.div = F('this.map((c,i,a) => a[i] / b)')

  'zyxw'.split('').forEach((c,i) => {
    A[c] = function(v) {
      var j = this.length - 1 - i
      if (v) this[j] = v
      return this[j]
    }
  })

  'abs ceil floor max min round'.split(' ').forEach((f,i) => {
    A[f] = function(p) {
      return this.map((v) => M[f](v,p))
    }
  })
})(Array.prototype, Math, (f)=>Function('b','return '+f))