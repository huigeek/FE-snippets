// 枚举

// 数字枚举
enum Direction {
  up = 1, // 不使用初始化器时，从0开始
  Down,
  Left,
  Right
}

enum Responses {
  Yes = 1,
  No = 0
}

function response(recipient: string, message: Responses):void{}

response('hww', Responses.Yes)

enum E{
  A = 1,
  B
}

enum Dir {
  Up = 'UP',
  Down = 'DOWN',
  Left = 'LEFT',
  Right = 'RIGHT'
}

enum F{
  M
}

enum FileAcces {
  None,
  Read = 1 << 1,
  Write = 1 << 2,
  ReadWrite = Read | Write,
  G = '123'.length
}

//  联合枚举与枚举成员的类型

enum ShapeKind {
  Circle,
  Square
}

interface Circle {
  kind: ShapeKind.Circle;
  radius: number;
}

interface Square {
  kind: ShapeKind.Square;
  sideLength: number;
}

let c: Circle = {
  kind: ShapeKind.Circle,
  radius: 100
}

// 反向映射

enum Enum {
  A
}

let a = Enum.A
let nameofA = Enum[a] // A

// const 枚举
const enum Enums {
  A = 1,
  B = A * 2
}

// 外部枚举
declare enum En {
  A = 1,
  B,
  C = 2
}
