/**
 * 给定一个未排序的整数数组 nums ，找出数字连续的最长序列（不要求序列元素在原数组中连续）的长度。
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  if (nums === null || nums.length === 0) {
    return 0
  }
  let map = new Map(), i = 0, len = nums.length, maxLen = 1
  while (i < len) {
    // nums[i]
    if (!map.has(nums[i])){
      map.set(nums[i], 1)
      if (map.has(nums[i] - 1)) {
        maxLen = Math.max(maxLen, merge(map, nums[i] - 1, nums[i]))
      }
      if (map.has(nums[i] + 1)) {
        maxLen = Math.max(maxLen, merge(map, nums[i], nums[i] + 1))
      }
    }
    i++
  }
  return maxLen
};

var merge = function (map, less, more) {
  let left = less - map.get(less) + 1
  let right = more + map.get(more) - 1
  let len = right - left + 1
  map.set(left, len)
  map.set(right, len)
  return len
}

// let nums = [100,4,200,1,3,2]
// console.log(longestConsecutive(nums))
