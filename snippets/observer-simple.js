let obj = {
  name: 'xyz',
  age: 16
}

// 数据劫持
function observer(obj) {
  if (typeof obj === 'object') {
    for (let key in obj) {
      // obj[key]
      defineReactive(obj, key, obj[key])
    }
  }
}

function defineReactive(obj, key, value) {
  Object.defineProperty(obj, key, {
    get () {
      const v = value
      return v
    },
    set (val) {
      if (val === value) return;
      console.log('data is updated', val);
      value = val
    }
  })
}

// observer(obj)
// obj.name = 'chenxi'
// console.log(obj.name)
