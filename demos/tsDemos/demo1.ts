type Combinable = number | string

type ConversionDescriptor = 'asText' | 'asNumber'

function combine(input1: Combinable, input2: Combinable, resultType: ConversionDescriptor) {
  let result

  if ((typeof input1 === 'number' && typeof input2 === 'number') || resultType === 'asNumber') {
    result = +input1 + +input2
  } else {
    result = input1.toString() + input2.toString()
  }
  
  return result
}

const combineAges = combine(30, 22, 'asNumber')
console.log(combineAges)

const namesAsNumbers = combine('Max', 'Anna', 'asText')
console.log(namesAsNumbers)

const combineNames = combine('max', 'Anna', 'asText')
console.log(combineNames)


