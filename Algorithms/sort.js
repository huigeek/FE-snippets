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

// let arr = [53, 1, 35, 22, 35, 32, 13, 53, 45, 26, 8]
// Sort.prototype.selectionSort(arr)
// console.log(arr)

function mergeSort(arr) {
  let len = arr.length
  if (len === 1) return arr
  let mid = Math.floor(len/2), left = arr.slice(0,mid), right=arr.slice(mid,len)
  return merge(mergeSort(left), mergeSort(right))
}

function merge (left, right) {
  let result = [], il = 0, ir = 0;
  while(il < left.length && ir < right.length){
    left[il] < right[ir] ? result.push(left[il++]) : result.push(right[ir++])
  }
  result.push(...left.slice(il), ...right.slice(ir))
  return result
}

// let temp = [13,22,1,3,53,1,53,53,5,5,6,63,23]
// console.log(mergeSort(temp))


function mergeSort2(arr) {
  merge2(arr, 0, arr.length - 1)
  return arr
}

function merge2(arr, left, right) {
  if (left === right) return
  // 取中间值 num / 2 等同于 num >> 1
  let mid = parseInt(left + ((right - left) >> 1))
  merge2(arr, left, mid)
  merge2(arr, mid + 1, right)

  let help = []
  let i = 0
  let p1 = left // left index
  let p2 = mid + 1 // right index

  while (p1 <= mid && p2 <= right) {
    help[i++] = arr[p1] < arr[p2] ? arr[p1++] : arr[p2++] 
  }
  while (p1 <= mid) {
    help[i++] = arr[p1++]
  }
  while (p2 <= right) {
    help[i++] = arr[p2++]
  }

  help.map((item, idx) => (arr[left + idx] = item))
  return arr
}

// let arr = [3, 515, 1, 35, 66, 43]
// mergeSort2(arr)
// console.log(arr)

const defaultSortingAlgorithm = (a, b) => {
  if (a < b) return -1
  if (a > b) return 1
  return 0
}

const quickSort = (
  unsortedArray,
  sortingAlgorithm = defaultSortingAlgorithm
) => {

  // Create a sortable array to return.
  const sortedArray = [ ...unsortedArray ];

  // Recursively sort sub-arrays.
  const recursiveSort = (start, end) => {

    // If this sub-array contains less than 2 elements, it's sorted.
    if (end - start < 1) {
      return;
    }

    const pivotValue = sortedArray[end];
    let splitIndex = start;
    for (let i = start; i < end; i++) {
      const sort = sortingAlgorithm(sortedArray[i], pivotValue);

      // This value is less than the pivot value.
      if (sort === -1) {

        // If the element just to the right of the split index,
        //   isn't this element, swap them.
        if (splitIndex !== i) {
          const temp = sortedArray[splitIndex];
          sortedArray[splitIndex] = sortedArray[i];
          sortedArray[i] = temp;
        }

        // Move the split index to the right by one,
        //   denoting an increase in the less-than sub-array size.
        splitIndex++;
      }

      // Leave values that are greater than or equal to
      //   the pivot value where they are.
    }

    // Move the pivot value to between the split.
    sortedArray[end] = sortedArray[splitIndex];
    sortedArray[splitIndex] = pivotValue;

    // Recursively sort the less-than and greater-than arrays.
    recursiveSort(start, splitIndex - 1);
    recursiveSort(splitIndex + 1, end);
  };

  // Sort the entire array.
  recursiveSort(0, unsortedArray.length - 1);
  return sortedArray;
};


let arr = [3, 52, 12, 5, 214, 2, 6, 7]
console.log(quickSort(arr))

