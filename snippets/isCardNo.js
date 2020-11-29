// 验证是否是身份证

function isCardNo (number) {
  // 身份证 可能是15位，可能18位，可能17位加一位X
  const reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
  return reg.test(number)
}

// const id1 = '15315134511135353X'
// const id2 = '15315134511135353x'
// const id3 = '153151345111353535'
// const id4 = '15315134511135353535'
// console.log(isCardNo(id1), isCardNo(id2), isCardNo(id3), isCardNo(id4))
