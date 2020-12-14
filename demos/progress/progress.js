// UMD模块模式
(function(){
  function myProgress(){
    function _init(){
      const htmlStr = `<div class="progress-box"><div class="progress-bar"></div></div>`
      const el = document.createElement('div')
      el.innerHTML = htmlStr
      document.body.appendChild(el)
    }

    // 向外暴露一个方法，供外部调用
    function loaded(){
      isLoaded = true
    }

    function loading(){
      let rest = 100
      let timer = setInterval(() => {
        let num = rest / 2
        rest -= num
        const progress = document.querySelector('.progress-bar')
        progress.style.width = `${100 - rest}%`
        if (isLoaded) {
          progress.style.width = '100%'
          clearInterval(timer)
          timer = null
        }
      }, 1000);
    }

    let isLoaded = false

    this.init = function(){
      _init()
      loading()
    }

    this.loaded = loaded
  }

  var moduleName = new myProgress()
  if (typeof module !== 'undefined' && typeof exports === 'object') {
    module.exports = moduleName
  } else if (typeof define === 'function' && (define.amd || define.cmd)) {
    define(function(){
      return moduleName
    })
  } else {
    this.myProgress = moduleName
  }
}.call(this || (typeof window !== 'undefined' ? window : global)))
