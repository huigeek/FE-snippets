class jQuery{
  constructor(selector){
    const result = document.querySelectorAll(selector)
    const length = result.length
    for(let i = 0; i < length; i++) {
      this[i] = result[i]
    }
    this.length = length
    this.selector = result
  }
  get(index){
    return this[index]
  }
  each(fn){
    // $('li').each(function(){})
    for (let i = 0; i < this.length; i++) {
      let el = this[i]
      fn(el)
    }
  }
  on(type, fn){
    // $('li').on('click', function(){})
    return this.each(el => {
      el.addEventListener(type, fn, false)
    })
  }
}

// 插件
jQuery.prototype.dialog = function(info){
  alert(info)
}

// const $p = new jQuery('p')
// $p.get(2)
// $p.each(el => console.log(el.nodeName))
// $p.on('click', () => alert('clicked'))

