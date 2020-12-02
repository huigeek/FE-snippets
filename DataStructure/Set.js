class MySet {
  constructor() {
    this.items = {}
  }
  has(el){
    return Object.prototype.hasOwnProperty.call(this.items, el)
  }
  add(el){
    if (!this.has(el)) {
      this.items[el] = el
      return true
    }
    return false
  }
  delete(el){
    if (!this.has(el)) return false
    delete this.items[el]
    return true
  }
  clear(){
    this.items = {}
  }
  size(){
    return Object.keys(this.items).length
  }
  values(){
    return Object.values(this.items)
  }
  union(otherSet){
    let unionSet = new Set()
    this.values().forEach(item => unionSet.add(item))
    otherSet.values().forEach(item => unionSet.add(item))
    return unionSet
  }
  intersection(otherSet){
    let intersetionSet = new Set()

    const curValues = this.values()
    const otherValues = otherSet.values()
    let biggerSet, smallerSet
    [biggerSet, smallerSet] = curValues.length > otherValues.length ?  [curValues, otherValues] : [otherValues, curValues]
    smallerSet.forEach(item => {
      if(biggerSet.has(item)) intersetionSet.add(item)
    })
    return intersetionSet
  }
  difference(otherSet){
    const differenceSet = new Set()
    const values = this.values()
    values.forEach(item => {
      if (!otherSet.has(item)) differenceSet.add(item)
    })
    return differenceSet
  }
  isSubsetOf(otherSet){
    if (this.size() > otherSet.size()) return false
    let isSubset = true
    const values = this.values()
    values.forEach(item => {
      if (!otherSet.has(item)) isSubset = false
    })
    return isSubset
  }
}

const set = new MySet()

set.add(1)
console.log(set.values())
console.log(set.has(1))
console.log(set.size())

set.add(2)
console.log(set.values())
console.log(set.has(2))
console.log(set.size())

set.delete(1)
console.log(set.values())

set.delete(2)
console.log(set.values())
