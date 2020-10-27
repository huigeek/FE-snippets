// const obj = {
//   parent: null,
//   id: 'xx',
//   name: 'gagd',
//   children: [
//     {
//       parent: 'xx',
//       name: '78',
//       id: '9888',
//       children: [
//         {
//           parent: '9888',
//           id: '000',
//           name: '78g',
//           children: []
//         }
//       ]
//     },
//     {
//       parent: 'xx',
//       name: 'gdg',
//       id: 'hgd',
//       children: []
//     }
//   ]
// }

// obj = {parent: null, id: 'xx', name: 'gagd', 'children/parent': 'xx', 'children/name': 'yy', 'children/children/parent': 'xx'}

function isObject (target) {
  return typeof target === 'object' && (target !== null)
}

/**
 * 场景：自己日常业务中有一些目录树（班级树）结构，需要提供模糊搜索匹配
 * 问题：一种是调后台查询接口，有些依赖接口；一种是拿到数据后拍平，在这个对象（或数组中）上搜索匹配
 * 附：使用栈，只大概思路，有些细节可以根据业务补充完善
 */
function flatObject (target) {
  let stack = [{value: target, path: ''}], result = {}

  while (stack.length) {
    const curItem = stack.shift()
    if (isObject(curItem.value)) {
      for (let key in curItem.value) {
        // curItem[key]
        stack.push({value: curItem.value[key], path: curItem.path + '/' + key})
      }
    }
    else {
      result[curItem.path] = curItem.value
    }
  }
  return result
}

// console.log(flatObject(obj))
