// // 保留三位小数
// parseToMoney(1234.56); // return '1,234.56'
// parseToMoney(123456789); // return '123,456,789'
// parseToMoney(1087654.321); // return '1,087,654.321'

function parseToMoney (num) {
  let [front, end] = num.toString().split('.')
  const arr = front.split('')
  let newArr = []
  const len = arr.length
  arr.map((item, idx) => {
    (len - idx) % 3 === 0 && (idx !== 0)? newArr.push(',', item) : newArr.push(item)
  })
  return end ? `${newArr.join('')}.${end}` : newArr.join('')
}

function parseToMoney2 (num) {
  let [integer, decimal] = String.prototype.split.call(num, '.')
  integer = integer.replace(/\d(?=(\d{3})+$)/g, '$&,')
  return decimal ? integer + '.' + decimal : integer
}

function parseToMoney3 (num) {
  let [integer, decimal] = String.prototype.split.call(num, '.')
  let newInteger = '', len = integer.length
  for (let i in integer) {
    newInteger += ((len - +i) % 3 === 1) ? `${integer[i]},` : integer[i]
  }
  return `${newInteger.slice(0, -1)}${decimal ? `.${decimal}` : ''}`
}

console.log(parseToMoney2(1087654))
console.log(parseToMoney3(1087654))
