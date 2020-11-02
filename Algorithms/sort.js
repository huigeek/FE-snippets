class Sort {
  // 冒泡排序, 两层循环。内循环是一个两两比较，把最大值放最后的操作
  bubbleSort (arr) {
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
  // 插入排序, 两层循环。拿外循环项值，与内循环从右向左比较。比外循环值大，则后移一位，最后把外循环值插入到结束点
  insertionSort (arr) {
    let i = 1, len = arr.length
    while (i < len) {
      let j = i - 1, temp = arr[i]
      while (j >= 0 && arr[j] > temp) {
        arr[j + 1] = arr[j]
        j--
      }
      arr[j + 1] = temp
      i++
    }
  }
  // 选择排序, 两层循环，内循环一次，找出比外循环值小的最小值位置。交换外循环项与内循环记录的位置所在项。
  selectionSort (arr) {
    let i = 0, len = arr.length
    while (i < len) {
      let minIndex = i, j = i + 1
      while (j < len) {
        (arr[minIndex] > arr[j]) && (minIndex = j)
        j++
      }
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
      i++
    }
  }
}

let arr = [53, 1, 35, 22, 35, 32, 13, 53, 45, 26, 8]
Sort.prototype.selectionSort(arr)
console.log(arr)