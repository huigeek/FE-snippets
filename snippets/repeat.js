// 需要实现的函数 function repeat (func, times, wait) {}
// 使下面调用代码能正常工作 const repeatFunc = repeat(console.log, 4, 3000);
// repeatFunc("hellworld"); //会输出4次 helloworld, 每次间隔3秒

function repeat(func, times, wait){
  let count = 0
  return function(){
    let content = [].slice.call(arguments, 0, 1)
    let timer = setInterval(() => {
      count++
      if (count > times) {
        clearInterval(timer)
        timer = null
      }
      else {
        func(content)
      }
    }, wait);
  }
}

// const repeatFunc = repeat(console.log, 4, 3000)
// repeatFunc('helloworld')
