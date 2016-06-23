var fs = require('fs')

eval(String(fs.readFileSync('array.vector.js')))

tests = [
  ['distanceSq',[0,0],[[0,0]],0],
  ['distanceSq',[0,0],[[0,1]],1],
  ['distanceSq',[0,0],[[1,1]],2],
  ['distanceSq',[2,2],[[0,0]],8],
  ['distanceSq',[-2,-2],[[2,2]],32],
  ['distanceSq',[0,0,0],[[0,0,1]],1],
  ['distanceSq',[0,0,0],[[1,1,1]],3],
]

failures = 0

tests.forEach(function (test, i) {
  var result = test[1][test[0]].apply(test[1], test[2])
  
  if (result != test[3]) {
    console.log(`Test ${i+1} Failed (Got ${result}, expect ${test[3]})`)
    failures += 1
  }
})

console.log(`${tests.length - failures}/${tests.length} tests passed`)

process.exit(failures)