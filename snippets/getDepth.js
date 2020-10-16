// 补充函数，实现示例功能

// function getDepth (obj) {
//    // ...
// }


// console.log(getDepth(1)) // 1
// console.log(getDepth(null)) // 1
// console.log(getDepth({})) // 1
// console.log(getDepth({ a: 1 })) // 2
// console.log(getDepth({ a: 1, b: { c: 2 } })) // 3
// console.log(getDepth({ a: { c: 3 }, b: 2 })) // 3

function isObject (target) {
  return target !== null && ['function', 'object'].includes(typeof target)
}

function isEmptyObject (target) {
  return /\{\s*\}/.test(JSON.stringify(target))
}

// 使用栈结构
function getDepth1 (target) {
  let levelArr = []
  let stack = [{value: target, level: 1}]

  while (stack.length) {
    let curObj = stack.shift()

    if (!isObject(curObj.value) || isEmptyObject(curObj.value)) {
      levelArr.push(curObj.level)
    }
    else {
      for (const k in curObj.value) {
        stack.push({value: (curObj.value)[k], level: curObj.level + 1})
      }
    }
  }

  return Math.max(...levelArr)
}

// 优化：把 levelArr 替换成一个值
function getDepth2 (target) {
  let result = 0
  let stack = [{value: target, level: 1}]

  while (stack.length) {
    let curObj = stack.shift()

    if (!isObject(curObj.value) || isEmptyObject(curObj.value)) {
      if (curObj.level > result) result = curObj.level
    }
    else {
      for (const k in curObj.value) {
        stack.push({value: (curObj.value)[k], level: curObj.level + 1})
      }
    }
  }

  return result
}

console.log(getDepth2(1)) // 1
console.log(getDepth2(null)) // 1
console.log(getDepth2({})) // 1
console.log(getDepth2({ a: 1 })) // 2
console.log(getDepth2({ a: 1, b: { c: 2 } })) // 3
console.log(getDepth2({ a: { c: 3 }, b: 2 })) // 3

