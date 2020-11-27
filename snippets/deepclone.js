// 使用 JSON.parse(JSON.stringify(obj))
// 缺点是 不能处理正则，对象会丢失constructor 不能解决循环引用
const deepclone1 = function(obj) {
  return JSON.parse(JSON.stringify(obj))
}

/**
 * 考虑其他类型的深拷贝 (还缺少处理循环引用，待完善)
 * @param {*} obj 
 */

const deepclone2 = obj => {

  const isObject = obj => {
    return (typeof obj === 'object') && (obj !== null)
  }

  const isType = (obj, type) => {
    const t = Object.prototype.toString.call(obj).slice(8, -1) // 类似[object Array]
    let flag
    switch (type) {
      case 'Array':
        flag = t === type
        break;
      case 'RegExp':
        flag = t === type
        break;
      case 'Date':
        flag = t === type
        break;
      case 'Object':
        flag = t === type
        break;
      default:
        flag = false
    }
    return flag
  }

  const getRegExpFlags = reg => {
    let flags = ''
    if (reg.global) flags += 'g'
    if (reg.multiple) flags += 'm'
    if (reg.ignoreCase) flags += 'i'
    return flags
  }

  const _clone = obj => {
    if (!isObject) return obj

    let result, proto
  
    if (isType(obj, 'RegExp')) { // 处理正则
      result = new RegExp(obj.source, getRegExpFlags(obj))
      if (obj.lastIndex) result.lastIndex = obj.lastIndex
    }
    else if (isType(obj, 'Date')) { // 处理日期
      result = new Date(obj.getTime())
    }
    else if (isType(obj, 'Array')) { // 处理数组
      result = []
    }
    else if (isType(obj, 'Object')) { // 处理正常对象
      proto = Object.getPrototypeOf(obj)
      result = Object.create(proto)
    }
  
    for (let k in obj) {
      // obj[k]
      result[k] = _clone(obj[k])
    }
  }

  return _clone(obj)
}