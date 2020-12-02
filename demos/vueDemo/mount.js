// vue 是如何把 vm 挂载到 dom 元素上的，$mount

// src/platforms/web/entry-runtime-with-compiler.js

const mount = Vue.prototype.$mount // 缓存原型上的 $mount 方法，再重新定义该方法
Vue.prototype.$mount = function(el, hydrating){
  el = el && query(el)

  const options = this.$options
  if (!options.render) {
    let template = options.template
    if (template) {
      template = 'xxx' // 总之拿到模板字符串
    }
    else if (el) {
      template = getOuterHTML(el) // 还是拿到html字符串
    }

    if (template) { // 处理模板字符串，得到 render 函数
  
      const {render, staticRenderFns} = compileToFunctions(template, {}, this)

      options.render = render
      options.staticRenderFns = staticRenderFns
    }
  }

  // 确保已经有 render 函数后，挂载

  return mount.call(this, el, hydrating) // 最后，调用原先原型上的 $mount 方法挂载
}

// 怎么把 template 处理得到 render 函数的 => compileToFunctions(template, {}, this)
// src/platforms/web/compiler/index.js
const {compile, compileToFunctions} = createCompiler(baseOptions)

// 根据 template, 使用 parse 得到 ast，使用 generate 得到 code
// src/compiler/index.js
const createCompiler = createCompilerCreator(function(template, options){
  const ast = parse(template.trim(), options)
  const code = generate(ast, options)
  return {
    ast,
    render: code.render,
    staticRenderFns: code.staticRenderFns
  }
})

// 上面已经看了怎么把 template 处理成 render 函数，下面看调用原型上 $mount 方法做了什么

// 原先原型上的 $mount 方法
// src/platforms/web/runtime/index.js

// public mount method
Vue.prototype.$mount = function(){
  el = el && isBrowser ? query(el) : undefined
  return mountComponent(this, el, hydrating)
}

// 核心是 mountComponent 方法, core/instance/lifecycle
function mountComponent(vm, el, hydrating){
  vm.$el = el

  callHook(vm, 'beforeMount')

  let updateComponent
  updateComponent = () => {
    // 方法里，调用 vm._render 生成 vnode，再调 vm._update 更新DOM
    const vnode = vm._render()
    vm._update(vnode, hydrating)
  }

  // 这里是关键，实例化一个渲染 Watcher, 在回调中调用 updateComponent
  new Watcher(vm, updateComponent, noop, {}, true/*isRenderWatcher*/)

  callHook(vm, 'mounted')

  return vm
}


// 简单看下 Watcher, core/observer/watcher.js
class Watch{
  constructor(vm, expOrFn, cb, options, isRenderWatcher){
    this.vm = vm

    if (isRenderWatcher) {
      vm._watcher = this
    }
    vm._watchers.push(this)

    this.cb = cb
    this.deps = []
    this.newDeps = []

    this.getter = expOrFn
  }

  get(){ // 收集依赖
    let value = this.getter.call(vm, vm)
    return value
  }
  addDep(){}
  cleanupDeps(){}
  // 订阅，数据改变时触发
  update(){}
  run(){}
  depend(){}
  teardown(){}
}
