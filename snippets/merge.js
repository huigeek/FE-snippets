// 合并两个有序数组
const arr1 = [1, 3, 5, 9]
const arr2 = [3, 8, 18, 20, 38]

// concat  set
// arr1.concat(arr2).sort()

const newArr = []
const arr = [...arr1, ...arr2]
const len1 = arr1.length
const len = arr.length
for (let i = 0, j = i + len1; i < len1, j < len;) {
  // arr1[i], arr2[j]
  arr[i] < arr[j] ? newArr.push(arr[i]) && i++ : newArr.push(arr[j]) && j++

  if (i === len1) { // arr[j], ....
    newArr.push(...arr.slice(j))
    break;
  }
  if (j === len) { // arr[i], arr[len1 - 1]
    newArr.push(...arr.slice(i, len1))
    break;
  }
}

console.log(newArr)



