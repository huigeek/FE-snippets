let input:[number, number] = [1, 2]

function f([first, second]: [number, number]) {
  console.log(first)
  console.log(second)
}

f(input)

let [first, ...rest] = [1, 2, 3, 4]
console.log(first)
console.log(rest)

let [ff] = [1, 2, 3, 4]
console.log(ff)

let [, s, fourth] = [1, 2, 3, 4]
console.log(s, fourth)

let o = {
  a: 'foo',
  b: 12,
  c: 'bar'
}

// let {a, b} = o
// console.log(a, b)

let {a, ...passthrouth} = o
console.log(passthrouth)

let {a: newName1, b: newName2} = o
console.log(newName1, newName2)

function keepWholeObject(wholeObject: {a: string, b?: number}) {
  let {a, b = 1001} = wholeObject
  console.log(a, b)
}

keepWholeObject({a: 'xx'})

type C = {a: string, b?: number}
function f1({a, b}: C): void{}

function f2({a, b = 0} = {a: ''}): void {
  //
}

f2({a: 'yes'})
f2()
// f2({}) // error

let first1 = [1, 2]
let second1 = [3, 4]
let bothPlus = [0, ...first1, ...second1, 5]

let defaults = {food: 'spicy', price: '$$', ambiance: 'noisy'}
let search = {...defaults, food: 'rich'}
let search1 = {food: 'rich', ...defaults}
console.log(search, search1)

class D {
  p = 12;
  m(){}
}

let c = new D()
let clone = { ...c }
console.log(clone.p)
// console.log(clone.m()) // error
