class Observer {
  constructor(){
    this.messages = {}
  }
  regist (type, fn) {
    this.messages[type] ? this.messages[type].push(fn) : (this.messages[type] = [fn])
  }
  fire (type, args) {
    if (!this.messages[type]) return
    this.messages[type].map(cb => cb(args))
  }
  remove (type, fn) {
    if (Array.isArray(this.messages[type])) {
      this.messages[type].forEach((cb, idx, arr) => {
        cb === fn && arr.splice(idx, 1)
      })
    }
  }
}

// const obs = new Observer()

// function print1 (msg) {
//   console.log('this is a test 1 ==>', msg)
// }

// function print2 (a, b) {
//   console.log('this is a test 2 ===>', a, b)
// }

// obs.regist('test', print1)
// obs.regist('test', print2)

// obs.fire('test', 'message1')

// obs.remove('test', print1)

// obs.fire('test', 'message2')
