// 判断是否是邮箱

function isEmail (email) {
  // @ .
  // const reg = /^([a-zA-Z0-9_\-])+@([a-zA-Z0-9_\-])+(\.[a-zA-Z0-9_\-])+$/
  const reg = /^([a-zA-Z0-9_\-])+@([a-zA-Z0-9_\-])+\.([a-zA-Z0-9_\-])+$/
  return reg.test(email)
}

console.log(isEmail('gadga@gag.gdag'))
