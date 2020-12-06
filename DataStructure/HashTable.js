// 散列算法的作用是尽可能快地在数据结构中找到一个值。
// 散列函数的作用是给定一个键值，然后返回值在表中的地址。

// JavaScript 语言内部就是使用散列表来表示每个对象。

function defaultToString(value){
  if (value === 'null') return 'NULL'
  if (value === 'undefined') return 'UNDEFINED'
  if (typeof value === 'string' && value instanceof String) return `${value}`
  return value.toString()
}

class HashTable {
  constructor(toStrFn = defaultToString){
    this.toStrFn = toStrFn
    this.table = {}
  }
  // 散列函数，单词每个字母的ASCII码值相加
  loseloseHashFn(key) {
    if (typeof key === 'number') return key
    let tableKey = this.toStrFn(key)
    let value = 0
    for (let l of tableKey) {
      value += l.charCodeAt(0)
    }
    return value % 37
  }
  hasCode(key) {
    return this.loseloseHashFn(key)
  }
  put(key, value){
    if (key !== null && value !== null) {
      let pos = this.hasCode(key)
      this.table[pos] = value
      return true
    }
    return false
  }
  remove(key){
    let pos = this.hasCode(key)
    if (this.table[pos]) {
      delete this.table[pos]
      return true
    }
    return false
  }
  get(key){
    let pos = this.hasCode(key)
    return this.table[pos] ? this.table[pos] : undefined
  }
}

// const hash = new HashTable()
// hash.put('Gandalf', 'gandalf@email.com')
// hash.put('John', 'johnsnow@email.com')
// hash.put('Tyrion', 'tyrion@email.com')

// console.log(hash.hasCode('Gandalf'), 'Gandalf')
// console.log(hash.hasCode('John'), 'John')
// console.log(hash.hasCode('Tyrion'), 'Tyrion')

// console.log(hash.get('Gandalf'))
// console.log(hash.get('Loiane'))

// hash.remove('Gandalf')
// console.log(hash.get('Gandalf'))
