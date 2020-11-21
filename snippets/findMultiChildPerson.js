// 有一个祖先树状 json 对象，当一个人有一个儿子的时候，其 child 为其儿子对象，如果有多个儿子，child 为儿子对象的数组。

// 请实现一个函数，找出这个家族中所有有多个儿子的人的名字（name），输出一个数组。

// 样例数据
let data = {
  name: 'jack',
  child: [
    { name: 'jack1' },
    {
      name: 'jack2',
      child: [{
        name: 'jack2-1',
        child: { name: 'jack2-1-1' }
      }, {
        name: 'jack2-2'
      }]
    },
    {
      name: 'jack3',
      child: { name: 'jack3-1' }
    }
  ]
}

function findMultiChildPerson(data) {
  let nameList = []
  
  function tmp (data) {
    if (data.hasOwnProperty('child')) {
      if (Array.isArray(data.child)) {
        nameList.push(data.name)
        data.child.map(item => tmp(item))
      }
    }
  }
  tmp(data)
  return nameList
}

function findMultiChildPerson2 (data) {
  let list = [data]
  let nameList = []

  while (list.length > 0) {
    const obj = list.shift()
    if (obj.hasOwnProperty('child')) {
      if (Array.isArray(obj.child)) {
        nameList.push(obj.name)
        obj.child.map(item => list.push(item))
      }
    }
  }
  return nameList
}

// console.log(findMultiChildPerson2(data))
