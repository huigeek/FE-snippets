const PENDING = 'pending'
const RESOLVED = 'resolved'
const REJECTED = 'rejected'

const resolvePromise = (newPromise, x, resolve, reject) => {
  (newPromise === x) && reject(new TypeError('Chaining cycle detected for promise'))
  if (x !== null && (typeof x === 'object' || typeof x === 'function')) {
    try {
      let then = x.then
      typeof then === 'function' ?
        then.call(x, res => resolvePromise(newPromise, res, resolve, reject), err => reject(err))
        :
        resolve(x)
    }
    catch (err) {
      reject(err)
    }
  }
  else {
    resolve(x)
  }
}

class MyPromise {
  constructor(fn) {
    this.value = null
    this.state = PENDING
    this.resolvedCallbacks = []
    this.rejectedCallbacks = []

    function resolve(value) {
      if (this.state === PENDING) {
        this.state = RESOLVED
        this.value = value
        this.resolvedCallbacks.map(cb => cb())
      }
    }

    function reject(value) {
      if (this.state === PENDING) {
        this.state = REJECTED
        this.value = value
        this.rejectedCallbacks.map(cb => cb())
      }
    }

    try {
      fn(resolve, reject)
    }
    catch (e) {
      reject(e)
    }
  }
  then(onFullfiled, onRejected) {
    let newPromise = new MyPromise((resolve, reject) => {
      onFullfiled = typeof onFullfiled === 'function' ? onFullfiled : v => v
      onRejected  = typeof onRejected  === 'function' ? onRejected  : v => v
      if (this.state === PENDING) {
        this.resolvedCallbacks.push(() => {
          setTimeout(() => {
            let x = onFullfiled(this.value)
            resolvePromise(newPromise, x, resolve, reject)
          }, 0);
        })
        this.rejectedCallbacks.push(() => {
          setTimeout(() => {
            let x = onRejected(this.value)
            resolvePromise(newPromise, x, resolve, reject)
          }, 0);
        })
      }
      if (this.state === RESOLVED) {
        setTimeout(() => {
          let x = onFullfiled(this.value)
          resolvePromise(newPromise, x, resolve, reject)
        }, 0);
      }
      if (this.state === REJECTED) {
        setTimeout(() => {
          let x = onRejected(this.value)
          resolvePromise(newPromise, x, resolve, reject)
        }, 0);
      }
    });

    return newPromise
  }
  resolve(val) {
    return new MyPromise((resolve, reject) => resolve(val))

  }
  reject(val) {
    return new MyPromise((resolve, reject) => reject(val))
  }
  race(promises) {
    return new MyPromise((resolve, reject) => {
      let len = promises.length
      for (let i = 0; i < len; i++) {
        promises[i].then(resolve, reject)
      }
    })
  }
  all(promises) {
    let arr = []
    let i = 0
    let len = promises.length
    const processData = (index, data) => {
      arr[index] = data
      i++
      (i === len) && resolve(arr)
    }
    return new MyPromise((resolve, reject) => {
      for (let i = 0; i < len; i++) {
        promises[i]
          .then(data => processData(i, data))
          .catch(err => reject(err))
      }
    })
  }
}

// const timeout = time => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('success')
//     }, time);
//   })
// }

// timeout(2000).then(res => {
//   console.log(res)
//   return timeout(3000)
// }).then(res => {
//   console.log(res)
// })

