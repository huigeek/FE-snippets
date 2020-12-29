// 数组去重
function unique1(arr){
  return [...new Set(arr)]
}
function unique2(arr){
  let res = []
  arr.forEach(item => (res.indexOf(item) < 0) && res.push(item))
  return res
}

// const arr = [3, 5, 1, 3, 2, 3, 5, 1, 5, 9]
// console.log(unique1(arr))
// console.log(unique2(arr))