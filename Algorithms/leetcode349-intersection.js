/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 * 
 * 用集合给数组去重
 * 遍历一个集合，如果一个值也在另一个集合里，收集这个值
 */
var intersection1 = function(nums1, nums2) {
  let set1 = new Set(nums1), set2 = new Set(nums2)
  let set3 = new Set()
  for (v of set1) {
    if (set2.has(v)) set3.add(v)
  }
  return [...set3]
}

var intersection2 = function(nums1, nums2) {
  let set1 = new Set(nums1), set2 = new Set(nums2)
  let result = []
  for (v of set1) {
    if (set2.has(v)) result.push(v)
  }
  return result
}

var intersection3 = function(nums1, nums2) {
  return [...new Set(nums1)].filter(v => nums2.includes(v))
}

// const num1 = [1,2,2,1]
// const num2 = [2,2]
// console.log(intersection3(num1, num2))