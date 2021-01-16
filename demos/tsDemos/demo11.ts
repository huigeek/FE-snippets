// 类型变量T
function identify<T>(arg: T): T{
  return arg
}

let mi:<T>(arg:T) => T = identify

let o1 = identify<string>('mystring')
let o2 = identify('hh')

function loggingIdentity<T>(arg:T[]):T[]{
  console.log(arg.length)
  return arg
}

function logIdentity<T>(arg: Array<T>):Array<T>{
  console.log(arg.length)
  return arg
}

interface GenericIdentityFn {
  <T>(arg: T): T;
}

function id<T>(arg: T):T{
  return arg
}

let myid: GenericIdentityFn = id


// 泛型类
class GenericNumber<T> {
  zeroValue: T;
  add: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0
myGenericNumber.add = function(x, y){return x + y}

let stringNumberic = new GenericNumber<string>()
stringNumberic.zeroValue = ''
stringNumberic.add = function(x, y) {return x + y}
console.log(stringNumberic.add('xx', 'test'))

// 范型约束
interface Lengthwise{
  length: number
}

function loggingIdentify<T extends Lengthwise>(arg: T):T {
  console.log(arg.length)
  return arg
}

loggingIdentify({length: 3, value: 10, age: 18})

// 在泛型约束中使用类型参数
// function getProperty(obj: T, key: K){
//   return obj[key]
// }
// let x = {a: 1, b: 2, c: 3, d: 4}
// getProperty(x, 'a')

// 在泛型里使用类类型
function create<T>(c: {new():T}):T{
  return new c()
}

class BeeKeeper{
  hasMask: boolean;
}

class ZooKeeper{
  nametag: string;
}

class Animal{
  numLegs: number;
}

class Bee extends Animal{
  keeper: BeeKeeper;
}

class Lion extends Animal{
  keeper: ZooKeeper;
}

function createInstance<A extends Animal>(c: new () => A): A{
  return new c()
}

createInstance(Lion).keeper.nametag; // TypeError: Cannot read property 'nametag' of undefined
createInstance(Bee).keeper.hasMask; // TypeError: Cannot read property 'hasMask' of undefined

