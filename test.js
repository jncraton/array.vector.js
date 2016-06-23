var fs = require('fs')

eval(String(fs.readFileSync('array.vector.js')))

tests = [
  ['distSq',[0,0],[[0,0]],0],
  ['distSq',[0,0],[[0,1]],1],
  ['distSq',[0,0],[[1,1]],2],
  ['distSq',[2,2],[[0,0]],8],
  ['distSq',[-2,-2],[[2,2]],32],
  ['distSq',[0,0,0],[[0,0,1]],1],
  ['distSq',[0,0,0],[[1,1,1]],3],
  ['distSq',[0,0,0],[[-1,-1,-1]],3],
  ['dist',[0,0],[[0,0]],0],
  ['dist',[0,0],[[0,1]],1],
  ['magSq',[0,0],[],0],
  ['magSq',[1,1],[],2],
  ['magSq',[-1,-1],[],2],
  ['magSq',[-1,-1,-1],[],3],
  ['magSq',[-1,-1,-1,-1],[],4],
  ['mag',[-1,-1,-1,-1],[],2],
  ['mag',[-1,0],[],1],
  ['add',[1,1],[[0,0]],[1,1]],
  ['add',[0,0],[[1,1]],[1,1]],
  ['add',[0,0],[[-1,-1]],[-1,-1]],
  ['add',[0,0],[[-1,0]],[-1,0]],
]

failures = 0

tests.forEach(function (test, i) {
  var result = test[1][test[0]].apply(test[1], test[2])
  
  if (JSON.stringify(result) != JSON.stringify(test[3])) {
    console.log(`Test ${i+1} Failed (Got ${result}, expect ${test[3]})`)
    failures += 1
  }
})

console.log(`${tests.length - failures}/${tests.length} tests passed`)

process.exit(failures)