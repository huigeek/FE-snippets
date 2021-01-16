// create an array containing 1...N

const arr1 = Array.from(new Array(15), (_, idx) => idx)
// console.log(arr1)

const arr2 = Array.from(Array(15), (_, idx) => idx)
// console.log(arr2)

const arr3 = Array.from({length: 15}, (_, idx) => idx)
// console.log(arr3)

const arr4 = [...Array(15).keys()]
// console.log(arr4)

const arr5 = [...new Array(15).keys()]
// console.log(arr5)




