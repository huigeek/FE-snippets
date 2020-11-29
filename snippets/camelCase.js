// 转化为驼峰命名法

// var s1 = "get-element-by-id"
// 转化为 getElementById

function toCamelCase1 (str) {
  return str.split('-').map((item, idx) => {
    return idx === 0 ? item.charAt(0).toLowerCase() + item.slice(1) : item.charAt(0).toUpperCase() + item.slice(1)
  }).join('')
}

function toCamelCase2 (str) {
  return str.replace(/-\w/g, x => x.slice(1).toUpperCase())
}

// const s1 = 'get-element-by-id'
// console.log(toCamelCase1(s1))
// console.log(toCamelCase2(s1))
