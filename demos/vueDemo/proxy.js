// vue 里访问某个属性，其实是做了一层代理

// proxy(vm, `_data`, key)
// proxy(vm, `_props`, key)

let that = {
  m: {
    a: 33,
    b: 'xx'
  }
}

function proxy(target, sourceKey, key) {
  Object.defineProperty(target, key, {
    enumerable: true,
    configurable: true,
    get: () => {
      return that[sourceKey][key]
    },
    set: (newVal) => {
      that[sourceKey][key] = newVal
    }
  })
}

const obj = {}

proxy(obj, 'm', 'a')
console.log(obj.a)
obj.a = 44
console.log(obj.a)
