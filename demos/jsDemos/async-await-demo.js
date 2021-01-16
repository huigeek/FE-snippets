const fn1 = async function(){
  return 100
}
const res1 = fn1()
console.log('fn1', res1) // fn1 Promise {100}
res1.then(data => {
  console.log('data', data) // data 100
})

!(async function(){
  const p1 = Promise.resolve(200)
  const res2 = await p1
  console.log('res2', res2) // res2 200
})()

!(async function(){
  const res3 = await 300
  console.log('res3', res3) // res3 300
})()

!(async function(){
  const res4 = await fn1()
  console.log('res4', res4) // res4 100
})()

!(async function(){
  const p2 = Promise.reject('--err--')
  try {
    const res5 = await p2
    console.log('res5', res5)
  } catch(err) {
    console.log('catch error ==>', err) // catch error ==> --err--
  }
})()

!(async function(){
  const p3 = Promise.reject('--err--') // 下面没有catch，会报错
  const res6 = await p3
  console.log('res6', res6)
})()

