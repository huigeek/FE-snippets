// 高级类型
// 交叉类型（intersection types）
function extend<T, U>(first: T, second: U): T & U {
  let result = <T & U>{}
  for (let id in first) {
    // first[id]
    (<any>result)[id] = (<any>first)[id]
  }
  for (let id in second) {
    if (!result.hasOwnProperty(id)) {
      (<any>result)[id] = (<any>second)[id]
    }
  }
  return result
}

class Person{
  constructor(public name: string){
  }
}

interface Loggable {
  log(): void;
}

class ConsoleLogger implements Loggable{
  log(){
    console.log('===')
  }
}

const jim = extend(new Person('Jim'), new ConsoleLogger())
const n = jim.name
jim.log()

// 联合类型(union types)

function paddingLeft (value: string, padding: string | number) {
  if (typeof padding === 'string') {
    return padding + value
  }
  if (typeof padding === 'number') {
    return Array(padding + 1).join(' ') + value
  }
}

console.log(paddingLeft('hello world', 4))

interface Bird{
  fly()
  layEggs()
}
interface Fish{
  swim()
  layEggs()
}

function getSmallPet(): Bird|Fish{
  return
}

// let pet = getSmallPet()
// pet.layEggs()
// pet.swim() // error

// 类型保护与区分类型（Type Guards and Differentiating Types）
// parameterName is Type, paramterName 必须是来自于当前函数签名里的一个参数名
function isFish(pet: Bird | Fish): pet is Fish{
  return (<Fish>pet).swim !== undefined
}

// let pet1 = getSmallPet()
// if (isFish(pet1)){
//   pet1.swim()
// } else {
//   pet1.fly()
// }

interface Padder {
  getPadderString(): string;
}

class SpaceRepeatingPadder implements Padder {
  constructor(private numSpaces: number){}
  getPadderString(){
    return Array(this.numSpaces + 1).join(' ')
  }
}

class StringPadder implements Padder{
  constructor(private value: string){}
  getPadderString(){
    return this.value
  }
}

function getRandomPadder (){
  return Math.random() < 0.5 ?
    new SpaceRepeatingPadder(4) : new StringPadder(' ')
}

let padder: Padder = getRandomPadder()
if (padder instanceof SpaceRepeatingPadder) {
  padder;
}
if (padder instanceof StringPadder) {
  padder;
}

function f(x: number, y?: number){
  return x + (y || 0)
}

// console.log(f(1, 2))
// console.log(f(1))
// console.log(f(1, undefined))
// console.log(f(1, null))

class C {
  a: number;
  b?: number;
}

// let c = new C()
// c.a = 12
// console.log(c)
// c.a = undefined
// console.log(c)
// c.b = 13
// console.log(c)
// c.b = undefined
// console.log(c)
// c.b = null
// console.log(c)

function ff(sn: string | null): string{
  return sn || 'default'
}

function fixed(name: string | null): string {
  function postfix(epithet: string){
    return name!.charAt(0) + '. the ' + epithet;
  }
  name = name || 'Bob'
  return postfix('greet')
}

console.log(fixed(null))

type Name = string;
type NameResolver = () => string;
type NameOrResolver = Name | NameResolver
function getName(n: NameOrResolver): Name {
  if (typeof n === 'string') return n
  else return n()
}

type Container<T> = { value: T }

type Tree<T> = {
  value: T;
  left: Tree<T>;
  right: Tree<T>;
}

// 字符串字面量类型
type Easing = 'ease-in' | 'ease-out' | 'ease-in-out'
class UIElement {
  animate(dx:number,dy:number,easing: Easing){
    switch(easing){
      case 'ease-in':
        // do sth
        break;
      case 'ease-out':
        // do sth
        break;
      case 'ease-in-out':
        // do sth
        break;
      default:
        // do sth
        // error
    }
  }
}

let button = new UIElement()
button.animate(0, 0, 'ease-in')
button.animate(0, 0, 'ease-out')
// button.animate(0, 0, 'unease')// error

function createElement(tagName: string): Element{
  // code goes here
  return 
}

// 可辨识联合 Discriminated Unions
interface Square{
  kind: 'square';
  size: number;
}

interface Rectangle {
  kind: 'rectangle';
  width: number;
  height: number;
}

interface Circle {
  kind: 'circle';
  radius: number;
}

interface Triangle {
  kind: 'triangle'
}

type Shape = Square | Rectangle | Circle | Triangle;

function assertNever(x:never):never {
  throw new Error('unexpected object: ' + x)
}

function area(s: Shape){
  switch (s.kind) {
    case 'square': return s.size * s.size;
    case 'rectangle': return s.height * s.width;
    case 'circle': return Math.PI * s.radius ** 2;
    // default: return assertNever(s); // error if there is missing case
  }
}

// 多态的 this 类型
// 表示的是某个包含类或接口的子类型。它被称做 F-bounded 多态性。它能很容易的表现连贯接口间的继承。

class BasicCalculator {
  public constructor(protected value: number = 0) {}
  public currentValue():number{
    return this.value
  }
  public add(operand: number): this {
    this.value += operand
    return this
  }
  public multiply(operand: number): this {
    this.value *= operand
    return this
  }
}

let v = new BasicCalculator(2)
            .multiply(5)
            .add(1)
            .currentValue()

console.log(v)

class ScientificCalculator extends BasicCalculator {
  public constructor (value = 0){
    super(value);
  }
  public sin() {
    this.value = Math.sin(this.value)
    return this
  }
}

let w = new ScientificCalculator(2)
        .multiply(5) // ScientificCalculator
        .sin()
        .add(1)
        .currentValue()

console.log(w)

// 索引类型 Index types
// 索引类型查询操作符， keyof T， 为 T 上已知的公共属性名的联合。
// 索引访问操作符，T[K]
function pluck<T, K extends keyof T>(o: T, names: K[]): T[K][]{
  return names.map(n => o[n])
}

interface Person{
  name: string;
  age: number;
  address: string;
}

let person: Person = {
  name: 'Jarid',
  age: 35,
  address: 'xx'
}

let strings = pluck(person, ['name', 'age']);
console.log(strings)

let personProps: keyof Person;

function getProperty<T, K extends keyof T>(o: T, name: K): T[K]{
  return o[name]
}

let nam: string = getProperty(person, 'name')
let age: number = getProperty(person, 'age')
console.log(nam, age)

interface Maps<T>{
  [key: string]: T;
}

let keys: keyof Maps<number>;
let value: Maps<number>['foo']

// 映射类型
type Readonlys<T> = {
  readonly [P in keyof T]: T[P];
}

type Partials<T> = {
  [P in keyof T]?: T[P]
}

type PersonPartial = Partials<Person>
type ReadonlyPerson = Readonlys<Person>

type Keys = 'option1' | 'option2'
type Flags = { [K in Keys]: boolean }

type Proxy<T> = {
  get(): T;
  set(value: T): void;
}

type Proxify<T> = {
  [P in keyof T]: Proxy<T[P]>
}

function proxify<T>(o: T): Proxify<T>{
  return
}

type ThreeStringProps = Record<'prop1' | 'prop2' | 'prop3', string>

function unproxify<T>(t: Proxify<T>): T{
  let result = {} as T;
  for (const k in t) {
    result[k] = t[k].get()
  }
  return result;
}

// let originalProps = unproxify(proxyProps)

// 预定义的有条件类型
// Exclude<T, U>
// Extract<T, U>
// NonNullable<T>
// ReturnType<T>
// InstanceType<T>

type T00 = Exclude<'a'|'b'|'c'|'d', 'a'|'c'|'f'>
type T01 = Extract<'a'|'b'|'c'|'d', 'a'|'c'|'f'>

type T02 = Exclude<string|number|(()=>void), Function>
type T03 = Extract<string|number|(()=>void), Function>

type T04 = NonNullable<string|number|undefined>;
type T05 = NonNullable<(()=>string)|string[]|null|undefined>

function f1(s:string){
  return {a:1, b:s}
}

type T10 = ReturnType<() => string>
type T11 = ReturnType<(s:string) => void>
type T12 = ReturnType<(<T>() => T)>