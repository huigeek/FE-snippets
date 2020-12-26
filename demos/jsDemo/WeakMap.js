// WeakMap
// 便于垃圾回收，键只能是对象
// WeakMap 的应用场景
// 1. 通过 WeakMap 缓存计算的值
// 2. 保持数据私有性

// WeakMap 和 Map 的区别？

// example

const wm = new WeakMap()
{
  const obj = {}
  wm.set(obj, 'attachedValue') // 这里 wm 给键 obj 绑定值
}
// 这里，obj 被垃圾回收。wm 里没有 obj 键及值。

// 使用 WeakMap 缓存结果
const cache = new WeakMap()
const countOwnKeys = (obj) => {
  // 第一次计算，第二次缓存
  if (cache.has(obj)) {
    return [cache.get(obj), 'cached']
  } else {
    const count = Object.keys(obj).length
    cache.set(obj, count)
    return [count, 'computed']
  }
}

const obj = {name: 'xx', age: 23}
const res1 = countOwnKeys(obj)
console.log(res1)
const res2 = countOwnKeys(obj)
console.log(res2)

// 使用 WeakMap 保持私有数据
const _counter = new WeakMap()
const _action = new WeakMap()

class Countdown {
  constructor(counter, action){
    _counter.set(this, counter)
    _action.set(this, action)
  }
  dec(){
    let counter = _counter.get(this)
    counter--
    _counter.set(this, counter)
    if (counter === 0) {
      _action.get(this)()
    }
  }
}

let invoked = false

const cd = new Countdown(3, () => invoked = true)

cd.dec()
cd.dec()
cd.dec()
console.log(invoked)

