// 类型推论

// 类型兼容性

interface Named {
  name: string;
}

class Person {
  name: string;
}

let p: Named;
p = new Person();

let x:Named;
let y = {name: 'Alice', location: 'Seattle'}
x = y

function greet(n: Named){
  console.log('Hello, ' + n.name)
}
greet(y)

let a = (a:number) => 0
let b = (b:number, c:string) => 0

b = a

let m = () => ({name: 'Alice'})
let n = () => ({name: 'Alice', location: 'Seattle'})

m = n

enum EventType{Mouse, Keyboard}

interface Event{timestamp: number}
interface MouseEvents extends Event {
  x:number;
  y:number;
}

interface KeyEvent extends Event{
  keyCode: number;
}

function listenEvent(eventType:EventType,handler:(n:Event)=>void){}

listenEvent(EventType.Mouse,(e:MouseEvents) => console.log('xx'))

enum Status {Ready, Waiting}
enum Color {Red, Blue, Green}

let statu = Status.Ready


interface Empty<T>{
  data: T
}
let xx:Empty<string>
let yy:Empty<number>


