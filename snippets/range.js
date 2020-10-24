function createRange (...args) {
  if (args.length === 0) return []

  let [start, end] = args.length === 1 ? [0, ...args] : args

  return Array.from({length: end - start + 1}, (_, index) => start + index)
}
console.log(createRange(2)) // [0,1,2]
console.log(createRange(3, 10)) // [3,4,5,6,7,8,9,10]
