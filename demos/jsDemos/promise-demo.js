// 加载图片
function loadImg (src){
  return new Promise((resolve, reject) => {
    const img = document.createElement('img')
    // 异步操作
    img.onload = () => {
      resolve(img)
    }
    img.onerror = () => {
      const err = new Error(`图片加载失败${src}`)
      reject(err)
    }
    img.src = src
  })
}

const url = 'xx'
loadImg(url).then(img => {
  console.log(img.width)
}).catch(ex => console.error(ex))


// 场景题 promise then 和 catch 的连接

// 第一题
Promise.resolve().then(() => {
  console.log(1)
}).catch(() => {
  console.log(2)
}).then(() => {
  console.log(3)
})

// 第二题
Promise.resolve().then(() => {
  console.log(1)
  throw new Error('error1')
}).catch(() => {
  console.log(2)
}).then(() => {
  console.log(3)
})

// 第三题
Promise.resolve().then(() => {
  console.log(1)
  throw new Error('error2')
}).catch(() => {
  console.log(2)
}).catch(() => {
  console.log(3)
})

// 场景题promise和setTimeout的顺序

console.log(100)
setTimeout(() => {
  console.log(200)
})
Promise.resolve().then(() => {
  console.log(300)
})
console.log(400)

// 100
// 400
// 300
// 200
