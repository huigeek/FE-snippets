// 下面srch值其实可省去，在浏览器里直接用location.search获取
// 因为主要在node里执行demo，所以这里都加了参数

// 获取url里search里的参数
function query1(srch, name){
  const search = srch.substring(1)
  const reg = new RegExp(`(^|&)${name}=([^&]*)(&|$)`, 'i')
  const res = search.match(reg)
  if (res === null) {
    return null
  }
  return res
}

function query2(srch, name){
  const p = new URLSearchParams(srch)
  return p.get(name)
}

// const str = '?a=10&b=20&c=30'
// console.log(query1(str, 'b')) // 20
// console.log(query2(str, 'b')) // 20

// 将url参数解析为js对象,
function queryToObj1(srch){
  const res = {}
  const search = srch.substring(1)
  search.split('&').forEach(paramStr => {
    const [key, value] = paramStr.split('=')
    res[key] = value
  })
  return res
}

function queryToObj2(srch){
  const res = {}
  const pList = new URLSearchParams(srch)
  for(let [key, value] of pList){
    res[key] = value
  }
  return res
}

const str = '?a=32&b=42&c=33'
// console.log(queryToObj1(str))
// console.log(queryToObj2(str))
