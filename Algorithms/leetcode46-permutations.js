// 给定一个没有重复数字的序列，返回其所有可能的全排列

const nums = [1, 2, 3] // 3 * 2 * 1 = 6

/**
 * @param {number[]} nums 
 * @return {number[][]}
 */
var permute = function(nums) {
  let result = []
  const backtrack = (path) => {
    if (path.length === nums.length) {
      result.push(path)
      return
    }
    nums.forEach(v => {
      if (path.includes(v)) return
      backtrack(path.concat(v))
    })
  }
  backtrack([])
  return result
}

console.log(permute(nums))