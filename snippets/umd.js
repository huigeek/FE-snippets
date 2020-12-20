(function(context, factory){
  if (typeof module === 'object' && typeof module.exports === 'object') {
    // commonjs
    module.exports = factory()
  } else if (typeof define === 'function' && define.amd) {
    define(factory)
  } else if (typeof define === 'function' && define.cmd) {
    define(function(require, exports, module) {
      module.exports = factory()
    })
  } else {
    // 没有模块环境，直接挂载到全局对象上
    context.umdModule = factory()
  }
})(this, function(){
  return {
    name: 'xx'
  }
})