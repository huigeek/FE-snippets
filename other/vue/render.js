// Vue 的 _render 方法

// 之前在 Vue 的挂载里，看到 Vue 通过 _render 生成 vnode
// 下面看下 _render 方法

// src/core/instance/render.js
vue.prototype._render = function(){
  const vm = this
   // 获取 options 里 render, 它可能是用户手写的 render 方法
  const {render, _parentVnode} = vm.$options

  // 设置父节点
  vm.$vnode = _parentVnode
  // 渲染自身
  let vnode

  // render 方法定义下上下文, 在 render 方法里传参 vm.$createElement 方法
  vnode = render.call(vm._renderProxy, vm.$createElement)

  vnode.parent = _parentVnode

  return vnode
}

// vm.$createElement 方法,  在 initRender 里会定义
function initRender(vm){
  // 把 createElement 方法绑定到实例
  // 参数顺序：tag, data, children, normalizationType, alwaysNormalize

  // vm._c, 模板字符串编译成render函数时用
  vm._c = (a, b, c, d) => createElement(vm, a, b, c, d, false)

  // vm.$createElement，用户手写 render 函数时会用
  vm.$createElement = (a, b, c, d) => createElement(vm, a, b, c, d, true)
  
}

// createElement 在 src/core/vdom/create-element.js 里
function createElement(context, tag, data, children, normalizationType, alwaysNormalize){
  return _createElement(context, tag, data, children, normalizationType)
}

// 传参，生成 vnode
function _createElement(context, tag, data, children, normalizationType){
  // do sth
  let vnode, ns
  if (typeof tag === 'string') { // 如果是元素标签, 处理成 vnode
    let Ctor
    if (config.isReservedTag(tag)) {
      vnode = new VNode(config.parsePlatformTagName(tag), data, children, undefined, undefined, context)
    } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      vnode = createComponent(Ctor, data, context, children, tag)
    } else {
      vnode = new VNode(tag, data, children, undefined, undefined, context)
    }
  } else {
    // 如果是组件
    vnode = createComponent(tag, data, context, children)
  }
}

