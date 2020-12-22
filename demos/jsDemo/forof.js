function mul(num) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(num * num)
    }, 1000)
  })
}

const arr = [1, 2, 3]

arr.forEach(async item => {
  const res = await mul(item)
  console.log('for--->', res)
})

// !(async function(){
//   for(let v of arr) {
//     const res = await mul(v)
//     console.log(res)
//   }
// })()

// !(async function(){
//   for(let i in arr) {
//     const res = await mul(arr[i])
//     console.log(res)
//   }
// })()
