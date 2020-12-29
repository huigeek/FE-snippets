function max(){
  const nums = Array.prototype.slice.call(arguments)
  let max = 0
  nums.map(n => {
    (n > max) && (max = n)
  })
  return max
}

// console.log(max(3, 1, 5, 22, 8, 35, 9)) // 35
