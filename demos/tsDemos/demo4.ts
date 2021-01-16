// 在元素类型后面接上[]
let list: number[] = [1, 2, 3]

// 使用数组泛型 Array<元素类型>
let items: Array<number> = [1, 2, 3]

// Declare a tuple type
let x: [string, number];
x = ['hello', 20]
// x = [10, 'he'] // error

console.log(x[0].substr(1))
// console.log(x[1].substr(2)) // error

// x[3] = 'world' // error

// console.log(x[5].toString()) // error

enum Color { Red = 1, Green, Blue }
let c: Color = Color.Green;

let colorName:string = Color[2]
console.log(colorName)

function warnUser(): void {
  console.log('this is my warning message')
}

let unusable: void = undefined

declare function create(o: object | null): void;

create({prop: 0})
create(null)

// create(42) // error
// create('string') // error
// create(false) // error
// create(undefined) // error

let someValue: any = 'this is a string'
let strLength: number = (<string>someValue).length

let someValue2: any = 'this is a string'
let strLength2: number = (someValue2 as string).length // 当在typescript里使用jsx时，只有as语法断言是被允许的
