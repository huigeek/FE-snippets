import jQuery from './jQuery';
import './jQuery.ts';

console.log(new jQuery('div'))

class Person {
  public name: string
  constructor(name: string){
    this.name = name
  }
}

class A extends Person{
  constructor(name: string){
    super(name)
  }
  saySomething(){
    console.log('---')
  }
}

const p = new Person('xx')
console.log('name===>', p.name)