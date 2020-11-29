// 请使用最基本的遍历来实现判断字符串 a 是否被包含在字符串 b 中，并返回第一次出现的位置（找不到返回 -1）。

function isContain1 (a, b) {
  if (b.length < a.length) return false
  for (let i in b) {
    if (a[0] === b[i]) {
      let temp = true
      for (let j in a) {
        if (a[j] !== b[+i + +j]) {
          temp = false
        }
      }
      if (temp) return i
    }
  }
  return -1
}

function isContain2 (a, b) {
  if (b.length < a.length) return false
  for (let i in b) {
    if ((a.charAt(0) === b[i]) && (a === b.substring(+i, +i + a.length))) return i
  }
  return -1
}

// let a1='34', b1='1234567'; // 返回 2
// let a2='35', b2='1234567'; // 返回 -1
// let a3='355', b3='12354355'; // 返回 5
// console.log(isContain1(a1, b1)) // 2
// console.log(isContain1(a2, b2)) // -1
// console.log(isContain1(a3, b3)) // 5
// console.log(isContain2(a1, b1)) // 2
// console.log(isContain2(a2, b2)) // -1
// console.log(isContain2(a3, b3)) // 5
