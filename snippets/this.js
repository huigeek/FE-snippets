function fn1(){
  console.log(this)
}

fn1() // window

fn1.call({x:100}) // {x:100}

const fn2 = fn1.bind({x:200})
fn2() // {x:200}

const zhangesan = {
  name: 'zhangsan',
  sayHi(){
    console.log(this) // 当前这个对象
  },
  wait(){
    setTimeout(function(){
      console.log(this) // window
    })
  },
  waitAgain(){
    setTimeout(() => {
      console.log(this) // 当前这个对象
    })
  }
}

zhangesan.sayHi() //作为对象方法执行， zhangesan对象
zhangesan.wait() // window
zhangesan.waitAgain() // zhangsan对象

class People {
  constructor(name){
    this.name = name
    this.age = 20
  }
  sayHi(){
    console.log(this)
  }
}

const lisi = new People('lisi')
lisi.sayHi() // lisi这个对象