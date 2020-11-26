// leetcode 242, 有效的字母异位词
// 给定两个字符串 s 和 t, 编写一个函数来判断 t 是否是 s 的字母异位词。可以假设字符串只包含小写字母。
// 字符异位词，也就是字符串中相同字符的数量要对应相等

var isAnagram1 = function (s, t) {
  if (s.length !== t.length) return false
  let arr = t.split('')
  for (let i = 0; i < s.length; i++) {
    // s.charAt(i)
    let idx = arr.findIndex(it => it === s.charAt(i))
    if (idx !== -1) arr.splice(idx, 1)
  }
  return !arr.length
}

// 利用长度为26的字符串数组，s中出现的字符加1，t中出现的字符减1，最后判断每个字符的个数是否都为0.
var isAnagram2 = function (s, t) {
  let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'g', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  let map = {}
  arr.map(l => map[l] = 0)
  for (let l of s) {
    map[l] += 1
  }
  for (let l of t) {
    map[l] -= 1
  }
  for (let l in map) {
    if (map[l]) return false
  }
  return true
}

// console.log(isAnagram1('rat', 'car'))
// console.log(isAnagram1('anagram', 'nagaram'))
// console.log(isAnagram2('rat', 'car'))
// console.log(isAnagram2('anagram', 'nagaram'))
