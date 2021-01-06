// 找出只出现一次的字符的下标

const str = 'your mind is your source of power.'

function findUnduplicatedLetters (str) {
  let result = []
  const map = new Map()
  for(let i in str) {
    const l = str.charAt(i)
    if(map.get(l)){
      map.set(l, Infinity)
    }
    else {
      map.set(l, i)
    }
  }
  for (let v of map.values()) {
    (v !== Infinity) && result.push(v)
  }
  return result
}

// console.log(findUnduplicatedLetters(str))

