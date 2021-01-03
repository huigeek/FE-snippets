## vue，深入响应式原理

vue里数据改变之后，是如何触发修改dom的？
vue的数据驱动，除了初始化时将数据渲染到dom上外，还包括在数据改变时触发dom的改变。

示例：
```html
<div id="app" @click="changeMsg">{{message}}</div>
<script src="vue.js"></script>
<script>
  new Vue({
    el: '#app',
    data: { // 这里仅是demo，不涉及组件重用，所以就没有以返回函数方式写
      message: 'origin value'
    },
    methods: {
      changeMsg(){
        this.message = 'new value'
      }
    }
  })
</script>
```

用户与页面交互过程：
之前：用户点击按钮，触发点击事件，执行事件绑定函数，在绑定函数中处理数据、获取dom元素，将数据添加到dom元素上
使用vue：用户点击按钮，触发点击事件，执行事件绑定函数（vue内部，根据数据的改变，自动更新dom）。

但这里，有几个需要注意的：
它是如何找到需要修改的那个dom元素
用户点击一次就修改一次吗，有做其他优化处理没
vue内部是怎么处理这块的，这样做时高效吗
vue有没有封装好，有可调用的接口呢

## 响应式对象

vue实现响应式的核心是使用了Object的静态方法`Object.defineProperty`
`Object.defineProperty(obj, key, descriptor)`, 在对象obj上定义或修改key，返回这个对象

对象目前存在的属性描述符有两种形式：数据描述符、存取描述符。
属性描述符里都有的：configurable, enumerable

存取描述符还有get和set方法，也就是对象的getter函数和setter函数，如果对象拥有getter和setter，可以把这个对象看成响应式对象。

vue把那些对象变成了响应式对象？

### initState

`src/platforms/web/entry-runtime-with-compiler.js` => `src/platform/web/runtime/index.js` => `src/core/index.js` => `src/core/instance/index.js`

```js
function Vue(options){
  this._init(options)
}

initMixin(Vue)
```

`src/core/instance/init.js`里

```js
function initMixin(Vue){
  const vm = this
  Vue.prototype._init = function(options){
    initState(vm)
  }
}
```

`src/core/instance/state.js`
```js
function initState(vm){
  const opts = vm.$options
  initProps(vm, opts.props)
  initMethods(vm, opts.methods)
  initData(vm)
  initComputed(vm, opts.computed)
  initWatch(vm, opts.watch)
}

// 这里先主要看initProps和initData，其他的之后再分析

// props的初始化过程，遍历props。遍历的过程做两件事：一个是把props里每个值变成响应式，一个是通过proxy把vm._props.xxx的访问代理到vm.xxx上。
function initProps(vm, propsOptions){
  const props = vm._props = {}
  for(const key in propsOptions){
    const value = validateProp(key, propsOptions, propsData, vm)
    defineReactive(props, key, value) // 把props变在响应式对象
  }
  proxy(vm, `_props`, key) // 把vm._props.xxx代理到vm.xxx上
}

// data的初始化过程也是做两件事：一个是把data里每个值变成响应式，一个是通过proxy把访问vm._data.xxx代理到vm.xxx上
function initData(vm){
  let data = vm.$options.data
  data = typeof data === 'function' ? getData(data, vm) : data
  proxy(vm, `_data`, key) // 把vm._data.xxx代理到vm.xxx上
  observe(data, true) // 把data变成响应式对象
}
```

### proxy
上面有看到`proxy`方法，把props和data上的属性代理到vm实例上。可以看上面的示例，在data里的message，changeMsg方法里可以通过`this.message`对它进行修改。这个通过`this.message`访问props、data、methods、computed等上面的属性的过程，发生在`proxy`阶段

仍然是 `src/core/instance/state.js`里, 通过`Object.definePropery`把`target[sourceKey][key]`的读写改成了`target[key]`的读写。通过vm.xxx访问到定义在props中的xxx属性了。通过vm.xxx访问到定义在data中的xxx属性了。
```js
const sharedPropertyDefinition = {
  enumberable: true,
  configurable: true,
  get: ()=>{},
  set: ()=>{}
}
function proxy(target, sourceKey, key){
  sharedPropertyDefinition.get = () => this[souceKey][key]
  sharedPropertyDefinition.set = (val) => this[sourceKey][key] = val
  Object.definePropery(target, key, sharedPropertyDefinition)
}
```

### observe

上面看到，初始化的过程中，把props和data变成了响应式对象。

observe, defineReactive 在`src/core/observer/index.js`里定义

observe方法用于监测数据的变化。它的作用是根据值生成一个Observer实例。
```js
// 根据值生成一个observer的实例，并返回这个实例
function observe(value, asRootData){
  let ob: Observer
  ob = new Observer(value)
  return ob
}

function defineReactive(obj, key, val){
  const dep = new Dep()
  const property = Object.getOwnPropertyDescriptor(obj, key)

  let childOb = observe(val) // 对子对象递归调用observe方法，保证obj如果嵌套多深的属性，都能变成响应式，都能被触发getter和setter。
  Object.defineProperty(obj, key, {
    enumberable: true,
    configurable: true,
    get: function(){
      dep.depend() // 收集依赖
      if(childOb){
        childOb.dep.depend()
      }
    },
    set: function(){
      dep.notify() // 发布通知
    }
  })
}
```

### Observer

Observer是一个类，它的作用是给对象的属性添加getter和setter，在getter里收集依赖，在setter里派发更新。
Observer的构造函数，首先实例化Dep对象，接着通过def函数把自身实例添加到数据对象value的__ob__属性上，def的定义在`src/core/util/lang.js`里

`src/core/observer/index.js`

```js
class Observer{
  value: any;
  dep: Dep;
  vmCount: number;

  constructor(value){
    this.value = value
    this.dep = new Dep()
    this.vmCount = 0
    def(value, '__ob__', this) // 把自身实例this添加到数据对象value的__ob__属性上
    this.walk(value) // 这里排除了数组，（如果value是数组，会遍历数据再次调用observe方法）
  }
  walk(obj){ // 遍历对象的key,调用defineReactive方法
    const key = Object.keys(obj)
    for(let i = 0; i < keys.length; i++){
      defineReactive(obj, keys[i])
    }
  }
}
```

`src/core/lang.js`
```js
// def函数是Object.definePropery的封装
function def(obj, key, val, enumberable){
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumberable,
    writable: true,
    configurable: true
  })
}
```

### defineReactive

`defineReactive`的功能就是定义一个响应式对象，给对象动态添加getter和setter

`defineReactive`函数最开始初始化`Dep`对象的实例，接着拿到对象的属性描述符。对子对象，递归调用`observe`方法, 这就保证了无论obj的结构多复杂，它的所以子属性也能变成响应式的对象。这样我们访问或修改一个嵌套比较深的属性，也能触发`getter`和`setter`。最后利用`Object.defineProperty`去给obj的属性key添加`getter`和`setter`。

**响应式对象的核心就是利用`Object.definePropery`给数据添加getter和setter，目的是在我们访问数据和修改数据的时候自动执行一些逻辑：getter做的事情是依赖收集，setter做的事情是派发更新。**
**vue会把props、data等变成响应式对象，在创建过程中，发现子属性也为对象则递归把该对象变成响应式**