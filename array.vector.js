((A,F) => {
  A.distSq = F('reduce((p,c,i,a) => p + Math.pow(a[i]-b[i],2), 0)')
  A.dist = F('Math.sqrt(distSq(b))')

  A.magSq = F('reduce((p,c) => p + (c*c), 0)')
  A.mag = F('Math.sqrt(magSq())')

  A.add = F('map((c,i,a) => a[i] + b[i])')
  A.sub = F('map((c,i,a) => a[i] - b[i])')
  A.mul = F('map((c,i,a) => a[i] * b)')
  A.div = F('map((c,i,a) => a[i] / b)')

  'zyxw'.split('').forEach((c,i) => {
    A[c] = function(v) {
      var j = this.length - 1 - i
      if (v) this[j] = v
      return this[j]
    }
  })

  for(f of 'abs ceil floor max min round'.split(' ')) A[f] = F(`map((v) => Math.${f}(v,b))`)

})(Array.prototype, (f)=>Function('b',`with(this){return ${f}}`))