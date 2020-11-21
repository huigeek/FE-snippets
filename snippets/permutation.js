// 我现在有一个数组[1,2,3,4]，请实现算法，得到这个数组的全排列的数组，如[2,1,3,4]，[2,1,4,3]。。。。你这个算法的时间复杂度是多少

const swap = (arr, i, j) => {
  let tmp = arr[i]
  arr[i] = arr[j]
  arr[j] = tmp
}

const permutation = arr => {
  const _permutation = (arr, start) => {
    if (start === arr.length) {
      console.log(arr)
      return
    }
    for (let i = start; i < arr.length; i++) {
      if (arr.slice(start, i).indexOf(arr[i]) !== -1) {
        continue
      }
      swap(arr, i, start)
      _permutation(arr, start + 1)
      swap(arr, i, start)
    }
    return
  }
  return _permutation(arr, 0)
}

permutation([1, 2, 3])