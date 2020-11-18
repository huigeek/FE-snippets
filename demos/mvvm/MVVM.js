class Compiler {
  constructor(el, vm) {
    // el: element string
    this.el = this.isElementNode(el) ? el : document.querySelector(el)
    this.vm = vm
    // console.log(this.el)

    let fragment = this.node2fragment(this.el)
    // console.log(fragment)

    // replace
    this.compile(fragment)

    // insert
    this.el.appendChild(fragment)
  }
  compile(node) {
    let childNodes = node.childNodes
    // console.log(childNodes)
    let arr = [...childNodes]
    arr.forEach(child => {
      if (this.isElementNode(child)) {
        // console.log('element', child)
        this.compileElement(child)
        this.compile(child)
      }
      else {
        this.compileText(child)
      }
    })
  }
  isDirective(attrName) {
    return attrName.startsWith('v-')
  }
  compileElement(node) {
    let attributes = node.attributes
    let arr = [...attributes]
    arr.forEach(attr => {
      let {name, value:expr} = attr
      if (this.isDirective(name)) {
        let [, directive] = name.split('-')
        let [directiveName, eventName] = directive.split(':')
        CompileUtil[directiveName](node, expr, this.vm, eventName)
      }
    })
  }
  compileText(node) {
    let content = node.textContent
    if (/\{\{(.+?)\}\}/.test(content)) {
      CompileUtil['text'](node, content, this.vm)
    }
  }
  isElementNode(node) {
    return node.nodeType === 1
  }
  node2fragment(node) {
    let fragment = document.createDocumentFragment()
    let firstChild
    while (firstChild = node.firstChild) {
      fragment.appendChild(firstChild)
    }
    return fragment
  }
}

CompileUtil = {
  getValue(vm, expr) {
    return expr.split('.').reduce((data, current) => {
      return data[current]
    }, vm.$data)
  },
  setValue(vm, expr, value) {
    return expr.split('.').reduce((data, current, index, arr) => {
      if (index === arr.length - 1) {
        return data[current] = value
      }
      return data[current]
    }, vm.$data)
  },
  model(node, expr, vm) {
    let fn = this.updater['modelUpdater']
    new Watcher(vm, expr, (newVal) => {
      fn(node, newVal)
    })
    node.addEventListener('input', (e) => {
      let value = e.target.value
      this.setValue(vm, expr, value)
    })
    let value = this.getValue(vm, expr)
    fn(node, value)
  },
  html(node, expr, vm) {
    let fn = this.updater['htmlUpdater']
    new Watcher(vm, expr, (newVal) => {
      fn(node, newVal)
    })
    let value = this.getValue(vm, expr)
    fn(node, value)

  },
  getContentValue(vm, expr) {
    return expr.replace(/\{\{(.+?)\}\}/g, (...args) => {
      return this.getValue(vm, args[1])
    })
  },
  on(node, expr, vm, eventName) {
    node.addEventListener(eventName, (e) => {
      vm[expr].call(vm, e)
    })
  },
  text(node, expr, vm) {
    let fn = this.updater['textUpdater'];
    let content = expr.replace(/\{\{(.+?)\}\}/g, (...args) => {
      new Watcher(vm, args[1], (newVal) => {
        fn(node, this.getContentValue(vm, expr))
      })
      return this.getValue(vm, args[1])
    });
    fn(node, content);
  },
  updater: {
    htmlUpdater(node, value) {
      node.innerHTML = value
    },
    modelUpdater(node, value){
      node.value = value
    },
    textUpdater(node, value) {
      node.textContent = value
    }
  }
}

class Dep {
  constructor() {
    this.subs = []
  }
  addSub(watcher){
    this.subs.push(watcher)
  }
  notify() {
    this.subs.map(watcher => watcher.update())
  }
}

class Watcher {
  constructor(vm, expr, cb){
    this.vm = vm
    this.expr = expr
    this.cb = cb
    this.oldVal = this.get()
  }
  get() {
    Dep.target = this
    let value = CompileUtil.getValue(this.vm, this.expr)
    Dep.target = null
    return value
  }
  update() {
    let newVal = this.get(this.vm, this.expr)
    if (newVal !== this.oldVal) {
      this.cb(newVal)
    }
  }
}

class Observer {
  constructor(data) {
    this.observer(data)
  }
  observer(data) {
    if (data && typeof data === 'object') {
      for (let key in data) {
        this.defineReactive(data, key, data[key])
      }
    }
  }
  defineReactive(obj, key, value) {
    this.observer(value)
    let dep = new Dep()
    Object.defineProperty(obj, key, {
      get(){
        Dep.target && dep.addSub(Dep.target)
        return value
      },
      set: (newVal) => {
        if (value === newVal) return
        this.observer(newVal)
        value = newVal
        dep.notify()
      }
    })
  }
}

class Vue {
  constructor(options) {
    this.$el = options.el
    this.$data = options.data
    let computed = options.computed
    let methods = options.methods

    if (this.$el) {
      new Observer(this.$data)


      for(let key in computed) {
        Object.defineProperty(this.$data, key, {
          get: () => {
            return computed[key].call(this)
          }
        })
      }
      for(let key in methods) {
        Object.defineProperty(this, key, {
          get() {
            return methods[key]
          }
        })
      }

      this.proxyVm(this.$data)

      new Compiler(this.$el, this)
    }
    else {

    }
  }
  proxyVm(data) {
    for(let key in data) {
      Object.defineProperty(this, key, {
        get(){
          return data[key]
        },
        set(newVal) {
          data[key] = newVal
        }
      })
    }
  }
}
