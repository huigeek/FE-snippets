interface Box {
  width: number;
  height: number;
}

interface Box {
  scale: number;
}

let box:Box = {height: 5, width: 5, scale: 10}

interface Document{
  createElement(tagName:any):Element;
}
interface Document{
  createElement(tagName:'div'):HTMLDivElement;
  createElement(tagName:'span'):HTMLSpanElement;
}
interface Document{
  createElement(tagName:string):HTMLElement;
  createElement(tagName:'canvas'):HTMLCanvasElement;
}

namespace Animals{
  export class Zebra{}
}

namespace Animals{
  export interface Legged {
    numberOfLegs: number;
  }
  export class Dog{}
}

// 合并命名空间和类
class Album {
  label: Album.AlbumLabel;
}

namespace Album {
  export class AlbumLabel{}
}

function buildLabel(name:string):string{
  return buildLabel.prefix+name+buildLabel.suffix
}

namespace buildLabel{
  export let suffix = '!'
  export let prefix = 'Hello, '
}

console.log(buildLabel('Sam Smith'))

enum Color{
  red=1,
  green=2,
  blue=4
}

namespace Color{
  export function mixColor(colorName:string){
    switch(colorName){
      case 'yellow': return Color.red + Color.green;
      case 'white': return Color.red + Color.green + Color.blue;
      case 'magenta': return Color.red + Color.blue;
      default: return Color.green + Color.blue;
    }
  }
}

console.log(Color.mixColor('white'))

export class Observable<T>{
  // 
}

declare global {
  interface Array<T>{
    toObservable(): Observable<T>;
  }
}

Array.prototype.toObservable = function(){
  //
  return new Observable()
}
