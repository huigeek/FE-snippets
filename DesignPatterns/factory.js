class Girl {
  constructor(name) {
    this.name = name
  }
  printName(){
    console.log(this.name)
  }
}

class Factory {
  static create(name) {
    return new Girl(name)
  }
}

Factory.create('lili').printName()


