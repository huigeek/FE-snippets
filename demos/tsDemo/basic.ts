function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  const result = n1 + n2
  showResult && console.log(phrase + result)
}

const num1 = 3
const num2 = 8.8
const printResult = typeof num1 === 'number' && typeof num2 === 'number'
const phrase = 'Result is '

add(num1, num2, printResult, phrase)