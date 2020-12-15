// 举一个角色判断的例子

function initByRole(role){
  if (role === 1 || role === 2) {
    // do sth
  } else if (role === 3 || role === 4) {
    // do sth
  } else if (role === 5) {
    // do sth
  } else {
    // do sth
  }
}

// 上面代码，可读性差、维护性差
// 解决上面问题，可以使用ts里枚举类型

// 数字枚举
enum Role{
  Reporter,
  Developer,
  Maintainer,
  Owner,
  Guest
}

console.log(Role.Developer) // 1

// 字符串枚举
enum Message{
  Success = 'success info',
  Fail = 'error info'
}

console.log(Message.Success)

// 异构枚举
enum Answer{
  N,
  Y = 'Yes'
}

// 枚举成员
enum Char{
  a,
  b = Char.a,
  c = 1 + 3,

  d = Math.random(),
  e = '123'.length
}

// 常量枚举
const enum Month{
  Jan,
  Feb,
  Mar
}

let month = [Month.Jan, Month.Feb, Month.Mar]
console.log(month)

// 枚举类型
enum E{a, b}
enum F{a = 0, b = 1}
enum G{a = 'apple', b = 'banana'}

let e:E = 1
let f:F = 3

console.log(e, f)

let e1:E.a
let e2:E.b
let e3:E.a

console.log(e1 === e3)
// console.log(e1 === e2)


let g1:G
let g2:G.a