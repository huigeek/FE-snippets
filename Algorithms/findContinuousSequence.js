function FindContinuousSequence(count) {
    const middle = Math.floor(count/2)
    let i = 0, result = []
    while (i < middle) {
        let j = i + 1
        while (true) {
            let arr = createArr(i, j),
                sum = getSum(arr)
            if ( sum > count) break
            else if (sum === count) {
                result.push(arr)
                break
            }
            j++
        }
        i++
    }
    return result
}

function createArr (i, j) {
    return new Array(j - i + 1).fill(null).map((_, idx)=> idx + i + 1)
}

function getSum (arr) {
    return arr.reduce((prev, cur) => prev + cur)
}

// console.log(FindContinuousSequence(1))
// console.log(FindContinuousSequence(2))
// console.log(FindContinuousSequence(3))
// console.log(FindContinuousSequence(4))
// console.log(FindContinuousSequence(5))
// console.log(FindContinuousSequence(6))
// console.log(FindContinuousSequence(7))