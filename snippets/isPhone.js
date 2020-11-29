// 判断是否是电话号码

function isPhone (tel) {
  // 11位, 1开头, 第二位[34578]
  const reg = /^1[34578]\d{9}$/
  return reg.test(tel.toString())
}

console.log(isPhone(13532535532))
console.log(isPhone(145235674322))
