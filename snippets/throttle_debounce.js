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

/**
 * throttle: 在短时间内，只执行一次。例如在搜索框输入时，每2秒匹配一次
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
