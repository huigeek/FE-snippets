// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。

// 有效字符串需满足：
// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。
// 注意空字符串可被认为是有效字符串。

function isValid (s) {
  const maps = new Map()
  maps.set('(', 1)
  maps.set('[', 2)
  maps.set('{', 3)
  maps.set(')', -1)
  maps.set(']', -2)
  maps.set('}', -3)
  let stack = []
  const letters = s.split('')
  for (let v of letters) {
    if (maps.get(v) > 0) {
      stack.push(v)
    }
    else {
      if (maps.get(stack.pop()) + maps.get(v) !== 0) {
        return false
      }
    }
  }
  return stack.length === 0
}

console.log(isValid('()')) // true
console.log(isValid('()[')) // false
console.log(isValid('[]()')) // true
console.log(isValid('([{}])')) // true
console.log(isValid('{[]}()')) // true
console.log(isValid('([]){')) // false
console.log(isValid(' ')) // false
console.log(isValid('')) // true
