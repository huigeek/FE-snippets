class DisjoinSet {
  constructor(count){
    this.parent = new Array(count).fill(null).map((_, idx) => idx)
    this.rank = new Array(count).fill(1)
  }
  find(p) {
    while (p !== this.parent[p]) {
      this.parent[p] = this.parent[this.parent[p]]
      p = this.parent[p]
    }
    return p
  }
  isConnected(p, q) {
    return this.find(p) === this.find(q)
  }
  union(p, q) {
    let i = this.find(p)
    let j = this.find(q)
    if (i === j) return
    if (this.rank[i] < this.rank[j]) {
      this.parent[i] = j
    } else if (this.rank[i] > this.rank[j]) {
      this.parent[j] = i
    } else {
      this.parent[i] = j
      this.rank[j]++
    }
  }
}

// let   d = new DisjoinSet(10)
// console.log(d)
// d.union(1, 2)
// d.union(2, 3)
// console.log(d.isConnected(1, 2))
// console.log(d)
