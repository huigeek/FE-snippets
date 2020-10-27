class Sort {
  babbleSort (arr) {
    let i = 0, len = arr.length
    while (i < len) {
      // arr[i]
      let j = 0
      while (j < len - i - 1) {
        // arr[j], arr[j+1]
        (arr[j] > arr[j+1]) && ([arr[j], arr[j+1]] = [arr[j+1], arr[j]])
        j++
      }
      i++
    }
  }
  // 插入排序
  insertSort (arr) {
    let i = 1, len = arr.length
    while (i < len) {
      let j = i
      while (j > 0) {
        (arr[j] < arr[j - 1]) && ([arr[j], arr[j - 1]] = [arr[j - 1], arr[j]])
        j--
      }
      i++
    }
  }
}

let arr = [53, 1, 35, 22, 35, 32, 13, 53, 45, 26, 8]
Sort.prototype.babbleSort(arr)
console.log(arr)