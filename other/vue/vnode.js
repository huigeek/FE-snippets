// 操作真实DOM是非常昂贵的。在浏览器打印一个div元素的所有属性，就有三百多个。
// VNode 是对真实 DOM 的一层抽象，看作是一个js对象，只是对真实DOM的一个映射。

class VNode {
  constructor(tag, data, children){
    this.tag = tag
    this.data = data
    this.children = children
  }
}

// 从 VNode 到真实 DOM, 中间会经过 create, diff，patch 等过程。
// create 是指 createElement 方法
// src/core/vdom/create-element.js

// 在 render.js 里已经分析了，createElement 方法调用了 _createElement
// _createElement 方法传参，生成了 vnode
// vnode = new VNode(tag, data, children)

// 知道 vm._render 如何建立一个 VNode，接下来要把这个 VNode 渲染成一个真实 DOM。
// 这个过程通过 vm._update 来完成
