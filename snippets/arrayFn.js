class ArrayFn {
  contains(arr, val) {
    return arr.includes(val)
  }
  sort(arr, type) {
    return arr.sort((a, b) => {
      switch (+type) {
        case 1:
          return a - b
        case 2:
          return b - a
        case 3:
            return Math.random() - 0.5
        default:
            return 0
      }
    })
  }
  unique(arr) {
    if (Array.hasOwnProperty('from')) {
      return Array.from(new Set(arr))
    }
    let result = []
    let i = 0
    while (i < arr.length) {
      if (!result.includes(arr[i])) result.push(arr[i])
      i++
    }
    return result
  }
  max(arr) {
    return Math.max(...arr)
  }
  min(arr) {
    return Math.min(...arr)
  }
  sum(arr) {
    return arr.reduce((prev, cur) => prev + cur, 0)
  }
}

let arr = [1, 5, 3, 2, 5, 13]
// console.log(ArrayFn.prototype.contains(arr, 13))
console.log(ArrayFn.prototype.unique(arr))