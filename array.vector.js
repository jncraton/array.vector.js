((A,F,M,R) => {
  A.distSq = F(R + 'p + Math.pow(a[i]-b[i],2), 0')
  A.dist = F('Math.sqrt(distSq(b)')

  A.magSq = F(R + 'p + (c*c), 0')
  A.mag = F('Math.sqrt(magSq()')

  A.add = F(M + 'a[i] + b[i]')
  A.sub = F(M + 'a[i] - b[i]')
  A.mul = F(M + 'a[i] * b')
  A.div = F(M + 'a[i] / b')

  'wxyz'.split('').forEach((c) => {
    A[c] = function(v) {
      var j = this.length + c.charCodeAt(0) - 123
      if (v) this[j] = v
      return this[j]
    }
  })

  for(f of 'abs ceil floor max min round'.split(' ')) A[f] = F(M + `Math.${f}(c,b)`)

})(Array.prototype, (f)=>Function('b',`with(this){return ${f})}`), 'map((c,i,a)=>', 'reduce((p,c,i,a)=>')