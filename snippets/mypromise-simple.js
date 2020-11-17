// 简单版
// promise, executor
const PENDING = 'pending'
const RESOLVED = 'resolved'
const REJECTED = 'rejected'

class MyPromise {
  constructor (fn) {
    this.status = PENDING
    this.value  = null
    this.resolveCbs = [] // success cbs
    this.rejectCbs  = [] // reject cbs
    
    const that = this

    function resolve(value) {
      if (that.status === PENDING) {
        that.status = RESOLVED
        that.value = value
        that.resolveCbs.map(cb => cb(that.value))
      }
    }

    function reject(reason) {
      if (that.status === PENDING) {
        that.status = REJECTED
        that.value = reason
        that.rejectCbs.map(cb => cb(that.value))
      }
    }

    fn(resolve, reject)
  }
  then (onFullfiled, onRejected) {
    onFullfiled = typeof onFullfiled === 'function' ? onFullfiled : v => v
    onRejected = typeof onRejected === 'function' ? onRejected : r => {throw r}

    if (this.status === PENDING) {
      // do sth
      this.resolveCbs.push(onFullfiled)
      this.rejectCbs.push(onRejected)
    }

    if (this.status === RESOLVED) {
      onFullfiled(this.value)
    }

    if (this.status === REJECTED) {
      onRejected(this.value)
    }

    // return promise

  }
}

// const myp = new MyPromise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(1)
//   }, 2000)
// }).then(value => {
//   console.log(value) // 1
// })

// console.log(myp) // undefined
