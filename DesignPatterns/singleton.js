// 单例模式又被称为单体模式,是只允许实例化一次的对象类
// 保证一个类仅有一个实例，并且提供一个访问它的全局访问点

var instance

function Singleton() {
  if (!instance) {
    instance = this
  }
  return instance
}