const arr = [1, 1, 2, 3, 3, 2, 4]

// 去重
const result = [...new Set(arr)]
// console.log(result)

// 判断元素是否在集合中
const set = new Set(arr)
console.log(set.has(3))

// 求交集
const set2 = new Set([2, 3])
const set3 = new Set([...set].filter(item => set2.has(item)))
// console.log(set3)
