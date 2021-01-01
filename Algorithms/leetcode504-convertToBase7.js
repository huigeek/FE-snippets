
// 给定一个整数，将其转化为7进制，并以字符形式输出

// 原生API，Number.prototype.toString([radix]), 不传radix时默认为10进制
const convertToBase7_1 = function(num){
  return Number(num).toString(7)
}

const convertToBase7_2 = function(num){
  let stack = []
  while (num > 0) {
    let n = num % 7
    num = Math.floor(num / 7)
    stack.push(n)
  }
  return stack.reverse().join('')
}

const convertToBase7_3 = function(num){
  // 考虑负数转换，如果是负数，最后还需要带上前面的负号
  // 前面需要判断一下，添加一个参数，用于判断数字是正还是负
  const isNegative = num < 0
  isNegative && (num = -num)
  let result = ''
  while (num / 7 !== 0) {
    result = num % 7 + result
    num = num / 7 >> 0
  }
  return isNegative ? '-' + result : result
}

console.log(convertToBase7_3(100))
console.log(convertToBase7_3(-7))
