interface ClockConstrutor {
  new (hour: number, minute: number);
}

interface ClockInterface {
  tick()
}

function createClock(ctor: ClockConstrutor, hour: number, minute: number){
  return new ctor(hour, minute)
}

class DigitalClock implements ClockInterface {
  constructor(h: number, m: number){}
  tick(){}
}

class AnalogClock implements ClockInterface {
  constructor(h: number, m: number){};
  tick(){}
}

let digital = createClock(DigitalClock, 12, 13)
let analog = createClock(AnalogClock, 8, 24)

console.log(digital, analog)

interface Shape {
  color: string;
}

interface Square extends Shape {
  sideLength: number;
}

let square = <Square>{}
square.color = 'blue'
square.sideLength = 20


interface PenStroke {
  penWidth: number;
}

interface Squ extends Shape, PenStroke {
  angle: number;
}

let s = <Squ>{}
s.color = 'green'
s.penWidth = 4
s.angle = 38

// 混合类型
// 例子，一个对象可以同时做为函数和对象使用

interface Counter {
  (start: number): string;
  interval: number;
  reset(): void;
}

function getCounter(): Counter {
  let counter = <Counter>function(start: number){}
  counter.interval = 123
  counter.reset = function(){}
  return counter
}

let c = getCounter()
c(10)
c.reset()
c.interval = 22

// 接口继承类
class Control {
  private state: any;
}

interface SelectableControl extends Control {
  select(): void;
}

class Button extends Control implements SelectableControl {
  select(){}
}

class TextBox extends Control {
  select(){}
}

class Im extends Control implements SelectableControl {
  select(){}
}
