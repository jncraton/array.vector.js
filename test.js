var fs = require('fs')

eval(String(fs.readFileSync('array.vector.js')))

failures = 0

tests = String(fs.readFileSync('tests.tsv')).split('\n')

tests.forEach(function (test, i) {
  test = test.split('\t').map((col,i) => {
    if (i > 0) {
      return JSON.parse(col)
    } else {
      return col
    }
  })

  var result = test[1][test[0]].apply(test[1], test[2])
  
  if (JSON.stringify(result) != JSON.stringify(test[3])) {
    console.log(`Test ${i+1} Failed (Got ${result}, expect ${test[3]})`)
    failures += 1
  }
})

console.log(`${tests.length - failures}/${tests.length} tests passed`)

process.exit(failures)