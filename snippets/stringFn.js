function trim(str) {
  return str.replace(/(^\s*)|(\s*$)/g, '')
}
function changeCase(str, type) {
  // type:
  // 1: first letter uppercase
  // 2: first letter lowercase
  // 3: toggle letter case
  // 4: all uppercase letters
  // 5: all lowercase letters
  const replaceObj = {
    '1': () => str.replace(/^\w/g, match => match.toUpperCase()),
    '2': () => str.replace(/^\w/g, match => match.toLowerCase()),
    '3': () => str.replace(/\w/g, match => /[a-z]/.test(match) ? match.toUpperCase() : match.toLowerCase()),
    '4': () => str.replace(/\w/g, match => match.toUpperCase()),
    '5': () => str.replace(/\w/g, match => match.toLowerCase())
  }
  return replaceObj[type]()
}

// let str = 'xgaAMMKgdg'
// let newStr = changeCase(str, '5')
// console.log(newStr)


module.exports = {
  trim,
  changeCase
}
