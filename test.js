var fs = require('fs')

tests = String(fs.readFileSync('tests.tsv')).split('\n').splice(1)

;['array.vector.js','array.vector.min.js'].forEach(function (file) {
  failures = 0

  try {
    var content = String(fs.readFileSync(file))
  } catch(e) {
    console.log(file + " failed to load")
    return
  }
  eval(content)

  tests.forEach(function (test, i) {
    test = test.split('\t')
    
    test[1] = JSON.parse(`[${test[1]}]`)
    test[2] = JSON.parse(`[${test[2]}]`)
    test[3] = JSON.parse(test[3])

    var result = test[1][test[0]].apply(test[1], test[2])
    
    if (JSON.stringify(result) != JSON.stringify(test[3])) {
      console.log(`Test ${i+1} Failed (${test[0]} got ${result}, expect ${test[3]})`)
      failures += 1
    }
  })
  console.log(`${file} ${tests.length - failures}/${tests.length} tests passed`)
})

process.exit(failures)