// const p1 = new Promise((resolve, reject) => {

// })

// console.log('p1', p1) // pending

// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(1)
//   })
// })

// console.log('p2', p2) // pending
// setTimeout(() => {
//   console.log('p2-setTimeout', p2)
// })

// const p3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject(2)
//   })
// })
// console.log('p3', p3) // pending
// setTimeout(() => {
//   console.log('p3-setTimeout', p3) // rejected
// })

// const p4 = Promise.resolve(100)
// console.log('p4', p4) // resolved
// p4.then(data => {
//   console.log('p4 data', data) // p4 data 100
// }).catch(err => {
//   console.log('p4 err', err)
// })

// const p5 = Promise.reject()
// console.log('p5', p5) // rejected
// p5.then(data => {
//   console.log('p5 data', data)
// }).catch(err => {
//   console.log('p5 err', err) // p5 err undefined
// })

const p6 = Promise.resolve().then(() => {
  return 100
})
p6.then(() => {
  console.log('p6 then') // p6 then
}).catch(err => {
  console.log('p6 error', err)
})

const p7 = Promise.resolve().then(() => {
  console.log('p7 then++++')
  throw new Error('p7 error--')
})
p7.then(() => {
  console.log('p7 then')
}).catch(err => {
  console.error('p7 error==', err)
})

const p8 = Promise.reject('p8 error').catch(err => {
  console.error('p8 catch err==', err)
})
console.log('p8', p8) // pending (resolved)

const p9 = Promise.reject('p9 error').catch(err => {
  console.log('p9 catch err===', err)
  throw new Error('p9 error')
})
console.log('p9', p9) // pending (rejected)