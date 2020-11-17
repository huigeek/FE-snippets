// implement Promise.all()

// Promise.all(promises).then(() => {}).catch(() => {})

Promise.myall = function (promises) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promises)) {
      throw Error('promises must be an array')
    }
    const len = promises.length
    let result = []
    let num = 0
    for (let i = 0; i < len; i++) {
      // promises[i], promise
      promises[i].then((r) => {
        num++;
        result[i] = r;
        (len === num) && resolve(result)
      }, (e) => {
        reject(e)
      })
    }
  })
}

// let p1 = Promise.resolve(1),
//     p2 = Promise.resolve(2),
//     p3 = Promise.resolve(3)

// Promise.myall([p1, p2, p3]).then(res => console.log(res, 'res'), err => console.log(err))

// let p4 = Promise.reject(4),
//     p5 = Promise.resolve(5),
//     p6 = Promise.resolve(6)

// Promise.myall([p4, p5, p6]).then(res => console.log(res, 'res'), err => console.log(err))