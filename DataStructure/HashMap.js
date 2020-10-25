class HashMap {
  constructor () {
    this.length = 0
    this.obj = new Object()
  }
  size () {
    return this.length
  }
  isEmpty () {
    this.length === 0
  }
  isContainKey (key) {
    return this.obj.hasOwnProperty(key)
  }
  isContainValue (value) {
    for (let key in this.obj) {
      if (this.obj[key] === value) {
        return true
      }
    }
  }
  put (key, value) {
    if (!this.isContainKey(key)) {
      this.length++
    }
    this.obj[key] = value
  }
  get (key) {
    return this.isContainKey(key) ? this.obj[key] : null
  }
  remove (key) {
    if (this.isContainKey(key)) {
      delete this.obj[key]
      this.length--
    }
  }
  values () {
    let _values = []
    for (let key in this.obj) {
      _values.push(obj[key])
    }
    return _values
  }
  keys () {
    let _keys = []
    for (let key in this.obj) {
      _keys.push(key)
    }
    return _keys
  }
  size () {
    return this.length
  }
  clear () {
    this.length = 0
    this.obj = new Object()
  }
}