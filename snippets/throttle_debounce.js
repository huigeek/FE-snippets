// 记录下返回的函数的this，将fn执行时的this绑定在这个函数上

/**
 * debounce: 在短时间内，只执行最后一次，例如resize事件，中间的反复触发是没有意义的，可以利用debounce只触发最后一次
 * // 使用定时器
 * @param {Function} fn 
 * @param {Number} wait 
 * @return {Function}
 */
function debounce1 (fn = function(){} , wait = 1000) {
  let timer, context, args
  return function () {
    context = this
    args = arguments
    timer && clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(context, args)
      timer = null
    }, wait)
  }
}

function debounce2 (fn = function(){}, wait = 1000) {
  let timer
  return (...args) => {
    timer && clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(this, args)
      timer = null
    }, wait)
  }
}

/**
 * throttle: 在短时间内，只执行一次。例如在搜索框输入时，每2秒匹配一次。
 * 例如拖拽一个元素时，要随时拿到该元素被拖拽的位置. 直接使用 drag 事件, 则会频繁触发，容易造成卡顿. 节流：无论拖拽速度多快，都会每隔 100ms 触发一次。
 * // 使用定时器
 * @param {Function} fn 
 * @param {Number} delay 
 * @return {Function}
 */
function throttle1 (fn = function(){}, delay = 1000) {
  let timer, context, args
  return function () {
    context = this
    args = arguments
    if (!timer) {
      timer = setTimeout(() => {
        fn.apply(context, args)
        timer = null
      }, delay)
    }
  }
}

/**
 * // 使用时间戳
 * @param {Function} fn 
 * @param {Number} limit 
 */
function throttle2 (fn = function(){}, limit = 1000) {
  let prev = Date.now()
  let context, args
  return function () {
    let now = Date.now()
    context = this
    args = arguments
    if (now - prev > limit) {
      fn.apply(context, args)
      prev = Date.now()
    }
  }
}

/**
 * // 设一个是否延迟执行的开关。这里会立即执行一次，执行后的limit时间内不会再执行，直到limit时间后
 * @param {Function} fn 
 * @param {Number} limit 
 * @return {Function}
 */
function throttle3 (fn = function(){}, limit = 1000) {
  let isDelay = false
  return function (...args) {
    if (!isDelay) {
      isDelay = true
      fn.apply(this, args)
      setTimeout(() => {
        isDelay = false
      }, limit)
    }
  }
}

// 节流函数
const throttle4 = function (fn = function(){}, limit = 1000) {
  let isDelay = false
  return (...args) => {
    if (isDelay) return
    isDelay = true
    setTimeout(() => {
      fn.apply(this, args)
      isDelay = false
    }, limit)  
  }
}

// function xx () {
//   console.log('--throttle--')
// }

// let t = throttle1(xx, 3000)

// setInterval(() => {
//   // xx()
//   t()
// }, 500)

