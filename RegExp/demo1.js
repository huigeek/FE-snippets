// 匹配有效数字
// 有效数字：可以有正负号，可以有小数部分，整数部分不能以0开头
let reg1 = /^[\+\-]?([1-9]?\d*)(\.\d+)?$/

// console.log(reg1.test('-3.1')) // true
// console.log(reg1.test('3.')) // false
// console.log(reg1.test('33.1')) // true
// console.log(reg1.test('3.1')) // true

// 正则捕获
// reg.exec(str) 从字符串中获取满足正则的字符
let str = 'hello2019hello2020'
let reg2 = /(\d+)/g

let result1 = str.match(reg2)
console.log(result1) // [ '2019', '2020' ]

let result2 = []
let item
while ((item = reg2.exec(str)) !== null) {
  result2.push(item[1])
}
console.log(result2) // [ '2019', '2020' ]

