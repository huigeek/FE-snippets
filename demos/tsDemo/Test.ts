import zip = require('./ZipCodeValidator')

let strings = ['hello', '98052', '101']

let validator = new zip()

strings.forEach(s => {
  console.log(`"${s}" - ${validator.isAcceptable(s) ? 'matches' : 'does not match'}`)
})