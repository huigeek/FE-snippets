interface LabelValue {
  label: string;
}

function printLabel(labelObject: LabelValue) {
  console.log(labelObject.label)
}

let myObj = {size: 10, label: 'Size 10 Object'}
printLabel(myObj)

interface SquareConfig {
  color?: string;
  width?: number
}

function createSquare(config: SquareConfig): {color: string, area: number} {
  let newSquare = {color: 'white', area: 100}
  if (config.color) {
    newSquare.color = config.color
  }
  if (config.width) {
    newSquare.area = config.width * config.width
  }
  return newSquare
}

console.log(createSquare({color: 'black'}))

interface Point {
  readonly x: number;
  readonly y: number;
}

let p1: Point = {x: 10, y: 20}
// p1.x = 5 // error

let a: number[] = [1, 2, 3, 4]
let ro: ReadonlyArray<number> = a
// ro[0] = 12 // error
// ro.push(5) // error
// ro.length = 200 // error
// a = ro // error

a = ro as number[]

interface searchConfig {
  (source: string, search: string): boolean;
}

let searchString: searchConfig

searchString = function (src: string, sub: string): boolean {
  let result = src.search(sub)
  return result > -1
}

interface StringArray {
  [index: number]: string;
}

let myArray: StringArray;
myArray = ['Bob', 'Fred'];

let myStr: string = myArray[0]

class Animal {
  name: string;
}

class Dog extends Animal {
  breed: string;
}

interface NumberDictionary {
  [index: string]: number;
  length: number;
}

interface ReadonlyStringArray {
  readonly [index: number]: string;
}

let mArray: ReadonlyStringArray = ['Alice', 'Bob'];
// mArray[2] = 'Mallory'; //error

interface ClockInterface {
  currentTime: Date;
}

class Clock implements ClockInterface {
  currentTime: Date;
  constructor(h: number, m: number) {
  }
}

interface ClockInterface2 {
  currentTime: Date;
  setTime(d: Date);
}

class Clock2 implements ClockInterface2 {
  currentTime: Date;
  constructor(h: number, m: number){}
  setTime(d: Date){
    this.currentTime = d
  }
}

