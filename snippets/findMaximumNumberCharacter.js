// 查找字符串中出现最多的字符和个数
// 例: abbcccddddd -> 字符最多的是d，出现了5次

function findMaxNumberCharacter1 (str) {
  let countMap = {}, char = '', number = 0
  for (let c of str) {
    // c
    if (countMap[c]) {
      countMap[c] = countMap[c] + 1
    } else {
      countMap[c] = 1
    }
    if (countMap[c] > number) {
      number = countMap[c]
      char = c
    }
  }
  return {
    char,
    number
  }
}

function findMaxNumberCharacter2 (str) {
  str = str.split('').sort().join('')
  let char = '', number = 0
  const reg = /(\w)\1+/g
  str.replace(reg, ($0, $1) => {
    [char, number] = [$1, $0.length]
  })
  return {
    char,
    number
  }
}

// const str = 'abbcccddddd'
// console.log(findMaxNumberCharacter1(str))
// console.log(findMaxNumberCharacter2(str))
