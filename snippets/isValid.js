// 匹配括号, 通过栈来实现
function isValid(s) {
  let arr = s.split(''),
      len = s.length,
      stack = [],
      strs = '([{}])'

  for (let i = 0; i < len; i++) {
    if (strs.indexOf(arr[i]) < 3) {
      stack.push(arr[i])
    }
    else {
      let last = stack.pop()
      if (strs.indexOf(last) + strs.indexOf(arr[i]) !== 5) return false
    }
  }
  return stack.length === 0
}

// let a = '{]['
// let b = '[{}]'

// console.log(isValid(a))
// console.log(isValid(b))
