// 位运算
// 十进制转二进制
// 二进制转十进制

// 左移<<
console.log(10 << 1) // 20 (1010 -> 10100) ==》10 * (2^1)
console.log(10 >> 1) // 5 (1010 -> 101) =====》10 / (2^1)

// 右移很好，可以在二分算法中取中间值
console.log(17 >> 1) // 8 (17/2^1)
console.log(17 >> 2) // 4 (17/2^2)

// 按位与
// 每一位都是1，结果才为1
console.log(7 & 8) // 1000 & 0111 -> 0000 -> 0

// 按位或
// 其中一位为1，结果就是1
console.log(8 | 7) // 15

// 按位异或
// 每一位都不同，结果才为1
console.log(8 ^ 7) // 1000 & 0111 => 1111 -> 15
console.log(8 ^ 8) // 1000 ^ 1000 => 0000 -> 0

// 两个数不使用四则运算得出和
// 这里还是不是特别理解
function sum(a, b) {
  if (a === 0) return b
  if (b === 0) return a
  let newA = a ^ b
  let newB = (a & b) << 1
  return sum(newA, newB)
}

console.log(sum(3, 4))

