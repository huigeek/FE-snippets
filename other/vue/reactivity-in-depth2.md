# vue 深入响应式原理(reactivity in depth)

> 引用的`vue`代码，并不是全的，省略了一些无关的

## 依赖收集

`src/core/observer/index.js`里定义了`defineReactive`

```js
function defineReactive(obj, key, val, customSetter, shallow){
  const dep = new Dep()
  const property = Object.getOwnPropertyDescriptor(obj, key)
  const getter = property && property.get
  const setter = property && property.set

  let childOb = !shallow && observe(val)
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter(){
      const value = getter ? getter.call(obj) : val
      if (Dep.target){
        dep.depend()
        if(childOb){
          childOb.dep.depend()
          if(Array.isArray(value)){
            dependArray(value)
          }
        }
      }
      return value
    },
    set: function reactiveSetter(newVal){
      const value = getter ? getter.call(obj) : val
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      if (setter){
        setter.call(obj, newVal)
      } else {
        val = newVal
      }
      childOb = !shallow && observe(newVal)
      dep.notify()
    }
  })
}
```

上面代码注意两个地方，一个是在`defineReactive`里实例化了一个`Dep`实例，另一个是在`get`函数里通过`dep.depend()`收集依赖，在`set`函数里通过`dep.notify()`来派发更新。

下面来看下`Dep`，它在`src/core/observer/dep.js`里定义
```js
class Dep{
  static target: ?Watcher
  id: number
  subs: Array<Watcher>

  constructor(){
    this.id = uid++
    this.subs = []
  }

  addSub(sub: Watcher){
    this.subs.push(sub)
  }

  removeSub(sub: Watcher){
    remove(this.subs, sub)
  }

  depend(){
    if(Dep.target){
      Dep.target.addDep(this)
    }
  }

  notify(){
    const subs = this.subs.slice()
    if(process.env.NODE_ENV !== 'production' && !config.async){
      subs.sort((a,b) => a.id - b.id)
    }
    for(let i = 0, l = subs.length; i < l; i++) {
      subs[i].update()
    }
  }
}
```

`Dep`是一个类，它定义了一些属性和方法。它有一个静态属性`target`，这是全局唯一`Watcher`，在同一时间只能有一个全局的`Watcher`被计算，另外它的自身属性`subs`也是`Watcher`的数组。

`Dep`是对`Watcher`的一种管理，`Dep`脱离`Watcher`单独存在是没有意义的。

下面看下`Watcher`的定义，它在文件`src/core/observer/watcher.js`里

```js
class Watcher{
  vm: Component
  expression: string
  cb: Function
  id: number
  deep: boolean
  user: boolean
  lazy: boolean
  sync: boolean
  dirty: boolean
  active: boolean
  deps: Array<Dep>
  newDeps: Array<Dep>
  depIds: SimpleSet
  newDepIds: SimpleSet
  before: ?Function
  getter: Function
  value: any

  constructor(vm, expOrFn, cb, options?, isRenderWatcher?){
    this.vm = vm
    if (isRenderWatcher) {
      vm._watcher = this
    }
    vm._watchers.push(this)

    this.cb = cb
    this.id = ++uid
    this.active = true
    this.dirty = this.lazy
    this.deps = []
    this.newDeps = []
    this.depIds = new Set()
    this.newDepIds = new Set()
    this.expression = process.env.NODE_ENV !== 'production' ? expOrFn.toString() : ''

    this.value = this.lazy ? undefined : this.get()
  }
  get(){
    pushTarget(this)
    let value
    const vm = this.vm
    value = this.getter.call(vm, vm)
    return value
  }
  addDep(dep: Dep){
    const id = dep.id
    if(!this.newDepIds.has(id)){
      this.newDepIds.add(id)
      this.newDeps.push(dep)
      if(!this.depIds.has(id)){
        dep.addSub(this)
      }
    }
  }
  cleanupDeps(){
    let i = this.deps.length
    while(i--){
      const dep = this.deps[i]
      if(!this.newDepIds.has(dep.id)){
        dep.removeSub(this)
      }
    }
    let tmp = this.depIds
    this.depIds = this.newDepIds
    this.newDepIds = tmp
    this.newDepIds.clear()
    tmp = this.deps
    this.deps = this.newDeps
    this.newDeps = tmp
    this.newDeps.length = 0
  }
  update(){
    if (this.lazy) {
      this.dirty = true
    } else if (this.sync) {
      this.run()
    } else {
      queueWatcher(this)
    }
  }
  run(){
    if (this.active){
      const value = this.get()
      if(value !== this.value || isObject(value) || this.deep) {
        const oldValue = this.value
        this.value = value
        this.cb.call(this.vm, value, oldValue)
      }
    }
  }
  evaluate(){
    this.value = this.get()
    this.dirty = false
  }
  depend(){
    let i = this.deps.length
    while(i--){
      this.deps[i].depend()
    }
  }
  teardown(){
    if(this.active){
      let i = this.deps.length
      while(i--){
        this.deps[i].removeSub(this)
      }
      this.active = false
    }
  }
}
```

`Watcher`是一个类，定义了一些和`Dep`相关的属性：
```js
this.deps = []
this.newDeps = []
this.depIds = new Set()
this.newDepIds = new Set()
```
其中，`this.deps`和`this.newDeps`表示`Watcher`实例持有的`Dep`实例的数组；
`this.depIds`和`this.newDepIds`代表`this.deps`和`this.newDeps`的id Set.

`Watcher`还定义了一些原型的方法，和依赖收集相关的有`get`、`addDep`和`cleanupDeps`


## 过程分析

知道将data变成响应式对象时，`get`里会收集依赖。都有那些时候需要访问数据呢，也就是触发`get`的场景有那些？

`vue`的`mount`过程是通过`mountComponent`(`src/core/instance/lifecycle.js`)函数

```js
updateComponent = () => {
  vm._update(vm._render(), hydrating)
}

new Watcher(vm, updateComponent, noop, {
  before(){
    if(vm._isMounted && !vm._isDestroyed){
      callHook(vm, 'beforeUpdate')
    }
  }
}, true /* isRenderWatcher */)
```

当我们实例化一个渲染`Watcher`时，进入构造函数运行，执行`this.get()`, 进入`Watcher`的`get`函数

```js
get(){
  pushTarget(this)
  let value
  const vm = this.vm
  value = this.getter.call(vm, vm)
  return value
}
```

`pushTarget`的定义在`src/core/observer/dep.js`

```js
Dep.target = null
const targetStack = []

function pushTarget(target: ?Watcher){
  targetStack.push(target)
  Dep.target = target
}
```

把`Dep.target`赋值为当前的渲染`Watcher`，并压栈（为了恢复用）。

`value = this.getter.call(vm, vm)`里`this.getter`对应的是`updateComponent`函数，这实际上就是在执行：`vm._update(vm._render(), hydrating)`

它会先执行`vm._render()`，这个方法会生成渲染VNode，并且在这个过程中会对`vm`上的数据进行访问，这个时候就触发了数据对象的getter.

