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

    // 为了支持异步，使用两个数组，当为PEDNING状态时，将回调订阅到数组中;
    // 当异步完成后，会调用数组中回调

    function resolve(value) {
      if (that.status === PENDING) {
        that.status = RESOLVED
        that.value = value
        // 发布
        that.resolveCbs.map(cb => cb(that.value))
      }
    }

    function reject(reason) {
      if (that.status === PENDING) {
        that.status = REJECTED
        that.value = reason
        // 发布
        that.rejectCbs.map(cb => cb(that.value))
      }
    }

    fn(resolve, reject)
  }
  then (onFullfiled, onRejected) {
    onFullfiled = typeof onFullfiled === 'function' ? onFullfiled : v => v
    onRejected = typeof onRejected === 'function' ? onRejected : r => {throw r}

    const executor = function(resolve, reject) {
      setTimeout(() => {
        try {
          const value = this.status === RESOLVED ? onFullfiled(this.value) : onRejected(this.value)
          resolve(value)
        }
        catch (e){
          reject(e)
        }
      })
    }

    if (this.status === PENDING) {
      return new MyPromise(function (resolve, reject) {
        // 订阅
        this.resolveCbs.push(executor.bind(this, resolve, reject))
        this.rejectCbs.push(executor.bind(this, resolve, reject))
      }.bind(this))
    }
    else {
      return new MyPromise(executor.bind(this))
    }
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
