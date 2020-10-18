// 实现代码判断给定的5-7张牌中是否*含有*同花顺牌型。 

// 什么是同花顺： 5张 牌面数字连续并且花色相同的牌，就构成同花顺牌型。 

// 要求： 

// 用数字0-51代表 52张牌，分别是 

// ♠A-K（0-12） 
// ♥A-K（13-25） 
// ♣A-K（26-38） 
// ♦A-K（39-51） 

// 实现函数 

// function judge(input) { 

// } 

// input 示例 

// judge([1,2,3,4,5]); // true 

// judge([2,4,6,8,10]); // false 

// 分析
// type: A B C D, number: 0-12, 
// 1.type, 2.sort
// if (5) 1. same type, 2. max-min=4
// if (6) remove max or min, then (5)
// if (7) remove max or min, then (6)

// 性能不好，先这样吧，后期有时间再优化
function judge (arr) {
  arr = arr.sort().map(item => ({value: item, type: getType(item)}))
  return getResult(arr)
}

function getResult (arr) {
  const len = arr.length
  if (len === 5) {
    return ((arr[0].type === arr[len - 1].type) && (arr[len - 1].value - arr[0].value === 4))
  }
  if (len > 5) {
    return getResult(arr.slice(0, len - 1)) || getResult(arr.slice(1))
  }
}

function getType (number) {
  let type = ''
  switch (number) {
    case number < 13:
      type = 'A'
      break
    case number < 26:
      type = 'B'
      break
    case number < 39:
      type = 'C'
      break
    case number < 52:
      type = 'D'
      break
    default:
      type = 'king'
  }
  return type
}

console.log(judge([1,2,3,4,5])) // true 
console.log(judge([2,4,6,8,10])) // false 
console.log(judge([2,3,4,5,7,8])) // false
console.log(judge([2,3,5,6,7,8,9])) // true
