function f() {  
  return (Math.random() * 19 - 10).toFixed(1)
}

function log(str) {
  process.stdout.write('\n' + str)
}

function mul() {
  var initial = [f(),f(),f()]
  var arg = f()
  var result = initial.map((cur) => cur*arg)
  log(`mul\t${initial}\t${arg}\t${JSON.stringify(result)}`)
}

function div() {
  var initial = [f(),f(),f()]
  var arg = f()
  var result = initial.map((cur) => cur/arg)
  log(`div\t${initial}\t${arg}\t${JSON.stringify(result)}`)
}

function add() {
  var initial = [f(),f(),f()]
  var arg = [f(),f(),f()]
  var result = initial.map((cur,i) => parseFloat(cur)+parseFloat(arg[i]))
  log(`add\t${initial}\t[${arg}]\t${JSON.stringify(result)}`)
}

function sub() {
  var initial = [f(),f(),f()]
  var arg = [f(),f(),f()]
  var result = initial.map((cur,i) => parseFloat(cur)-parseFloat(arg[i]))
  log(`sub\t${initial}\t[${arg}]\t${JSON.stringify(result)}`)
}

function dot() {
  var a = [f(),f(),f()]
  var b = [f(),f(),f()]
  var result = a.reduce((sum,cur,i,a) => sum + a[i]*b[i], 0)
  log(`dot\t${a}\t[${b}]\t${JSON.stringify(result)}`)
}

Array.prototype.cross = function (b) {
  return [
    this[1]*b[2] - this[2]*b[1],
    this[2]*b[0] - this[0]*b[2],
    this[0]*b[1] - this[1]*b[0]
  ]
}

function cross() {
  var a = [f(),f(),f()]
  var b = [f(),f(),f()]
  var result = a.cross(b)
  log(`cross\t${a}\t[${b}]\t${JSON.stringify(result)}`)
}

function magSq() {
  var initial = [f(),f(),f()]
  var result = initial.reduce((prev,cur) => prev + (cur*cur), 0)
  log(`magSq\t${initial}\t\t${JSON.stringify(result)}`)
}

function mag() {
  var initial = [f(),f(),f()]
  var result = Math.sqrt(initial.reduce((prev,cur) => prev + (cur*cur), 0))
  log(`mag\t${initial}\t\t${JSON.stringify(result)}`)
}

function distSq() {
  var a = [f(),f(),f()]
  var b = [f(),f(),f()]
  var result = a.reduce((prev,cur,i) => prev + (a[i]-b[i])*(a[i]-b[i]), 0)
  log(`distSq\t${a}\t[${b}]\t${JSON.stringify(result)}`)
}

function dist() {
  var a = [f(),f(),f()]
  var b = [f(),f(),f()]
  var result = Math.sqrt(a.reduce((prev,cur,i) => prev + (a[i]-b[i])*(a[i]-b[i]), 0))
  log(`dist\t${a}\t[${b}]\t${JSON.stringify(result)}`)
}

for (var i = 0; i < 75; i+=1) {
  dot()
  cross()
}