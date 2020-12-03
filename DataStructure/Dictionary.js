class Dictionary {
  constructor(){
    this.table = {}
  }
  hasKey(key){
    return Object.prototype.hasOwnProperty(this.table, key)
  }
  set(key, value){
    if (!this.hasKey(key)) {
      this.table[key] = value
      return true
    }
    return false
  }
  remove(key){
    if (this.hasKey(key)) {
      delete this.table[key]
      return true
    }
    return false
  }
  get(key){
    if (this.hasKey(key)) {
      return this.table[key]
    }
    return undefined
  }
  clear(){
    this.table = {}
  }
  size(){
    const keys = Object.keys(this.table)
    return keys.length
  }
  toString(){
    const values = Object.values(this.table)
    return values.join('')
  }
  isEmpty(){
    return this.size === 0
  }
  keys(){
    return Object.keys(this.table)
  }
  values(){
    return Object.values(this.table)
  }
}
