function Person(name){
  this.name = name
}

Person.prototype.say = function(){
  // do sth
}

function Teacher(name, age){
  Person.call(this)
  this.name = name
  this.age = age
}

Teacher.prototype = Object.create(Person.prototype)
Teacher.prototype.constructor = Teacher


