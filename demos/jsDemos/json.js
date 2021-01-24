// 使用链表指针获取json的节点值

const json = {
  a: {
    b: {
      c: {
        d: 88
      }
    },
    e: {
      f: 33
    }
  }
}

// const path = ['a', 'b', 'c', 'd']
const path = ['a', 'e']

let p = json
path.forEach(k => {
  p = p[k]
})
console.log(p)


