class Greeter {
  greeting: string
  constructor (message: string) {
    this.greeting = message
  }
  greet(){
    console.log(`Hello, ${this.greeting}`)
  }
}

const greeter = new Greeter('world')
greeter.greet()

class Animal {
  public name: string
  public constructor(theName: string){
    this.name = theName
  }
  public move(distanceInMeters: number = 0){
    console.log(`Animal moved ${distanceInMeters}m`)
  }
}

class Dog extends Animal {
  dark(){
    console.log('Woof! Woof!')
  }
}

class Snake extends Animal {
  constructor(name: string){
    super(name)
  }
  move(distanceInMeters = 5){
    console.log('snake, do sth')
    super.move(distanceInMeters)
  }
}

class Horse extends Animal {
  constructor(name: string){
    super(name)
  }
  move(distanceInMeters = 45){
    console.log('horse do sth')
    super.move(distanceInMeters)
  }
}

const d = new Dog('didi')
d.dark()
d.move(10)
d.dark()

const sam = new Snake('sammy')
const tom = new Horse('tommy')

sam.move()
tom.move()

class Person {
  protected name: string
  protected constructor(name){
    this.name = name
  }
}

class Employee extends Person {
  private department: string
  constructor(name, department){
    super(name)
    this.department = department
  }
  public getElvatorPitch(){
    console.log(`Hello, my name is ${this.name} and I work in ${this.department}`)
  }
}

const howard = new Employee('howard', 'sales')
howard.getElvatorPitch()

class Octopus {
  constructor(readonly name: string){
    this.name = name
  }
}

const dd = new Octopus('mmm')
console.log(dd.name)

const password = 'secret password'

class Employ {
  private _fullname: string
  constructor() {

  }
  get fullname (){
    return this._fullname
  }
  set fullname (newName: string){
    if (password && password === 'secret password') {
      this._fullname = newName
    }
    else {
      console.log(`Error: unauthorized update of employee!`)
    }
  }
}

const em = new Employ()
em.fullname = 'xxx'
console.log(em.fullname)

// static property
class Grid {
  static origin = {x:0, y:0}
  constructor(public scale: number){
  }
  calculateDistanceFromOrigin(point: {x:number, y:number}){
    let xDist = point.x - Grid.origin.x
    let yDist = point.y - Grid.origin.y
    return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale
  }
}

const grid1 = new Grid(1.0)
const grid2 = new Grid(5.0)

console.log(grid1.calculateDistanceFromOrigin({x: 10, y: 10}))
console.log(grid2.calculateDistanceFromOrigin({x: 10, y: 10}))

// 抽象类 abstract
abstract class Anim {
  constructor(){}
  abstract makeSound(): void
  move(): void{}
}

class Point{
  x:number
  y:number
}

interface Point3d extends Point{
  z:number
}

let point3d: Point3d = {x: 1, y: 2, z: 1}
