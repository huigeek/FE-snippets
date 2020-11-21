// 实现Storage，使得该对象为单例，并对localStorage进行封装设置值setItem(key,value)和getItem(key)

let instance = null

class Storage {
  static getInstance(){
    if (!instance) {
      instance = new Storage()
    }
    return instance
  }
  setItem = (key, value) => localStorage.setItem(key, value)

  getItem = (key) => localStorage.getItem(key)
}
