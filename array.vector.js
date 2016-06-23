(($) => {
  $.distSq = function (b) {
    return this.reduce((p,c,i) => p + Math.pow((this[i]-b[i]),2), 0)
  }
  $.dist = function (b) { return Math.sqrt(this.distSq(b)) }

  $.magSq = function () {
    return this.reduce((p,c) => p + (c*c), 0)
  }
  $.mag = function () { return Math.sqrt(this.magSq()) }

  $.add = function(b) { return this.map((c,i,a) => a[i] + b[i]) }
  $.sub = function(b) { return this.map((c,i,a) => a[i] - b[i]) }
  $.mul = function(b) { return this.map((c,i,a) => a[i] * b) }
  $.div = function(b) { return this.map((c,i,a) => a[i] / b) }

  'zyxw'.split('').forEach((c,i) => {
    $[c] = function(v) {
      if (v) this[this.length - 1 - i] = v
      return this[this.length - 1 - i]
    }
  })

  'abs ceil floor max min round'.split(' ').forEach((f,i) => {
    $[f] = function(p) {
      return this.map((v) => v = Math[f](v,p))
    }
  })
})(Array.prototype)