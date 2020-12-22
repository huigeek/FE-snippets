// 宏任务 微任务：
// 1. 定义（宏任务：setTimeout、setInterval、Ajax、DOM事件; 微任务：Promise、async/await）
// 2. event loop 和 DOM 渲染
// 3. 宏任务和微任务的区别: 微任务比宏任务执行更早

// event loop 和 DOM 渲染

// 当 Call Stack 空闲，先尝试 DOM 渲染，再触发 Event Loop

const el1 = document.createElement('div')
el1.innerText = 'first'

const el2 = document.createElement('div')
el2.innerText = 'second'

const el3 = document.createElement('div')
el3.innerText = 'third'

document.body.appendChild(el1)
document.body.appendChild(el2)
document.body.appendChild(el3)

// console.log('length', document.body.children)
// alert('本次 call stack 结束，DOM 结构已更新，但尚未触发渲染') // alert会阻断js的执行,也会阻断DOM渲染，便于查看效果

// 宏任务：DOM 渲染后触发，如setTimeout
// 微任务：DOM 渲染前触发

Promise.resolve().then(() => {
  console.log('length', document.body.children)
  alert('promise then')
})

setTimeout(() => {
  alert('setTimeout')
})

// 为什么微任务放在DOM渲染前(微任务触发时间更早)
// 执行js代码时，执行Promise时，它是等待时机放在 micro task queue里
// (Promise是ES规范，不会经过Web APIs)

// 微任务都是ES规范
// 宏任务是Web APIs

// 1. Call Stack 清空
// 2. 执行当前的微任务
// 3. 尝试 DOM 渲染
// 4. 触发 Event Loop