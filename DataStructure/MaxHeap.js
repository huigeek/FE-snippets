class MaxHeap {
  constructor() {
    this.heap = []
  }
  size() {
    return this.heap.length
  }
  empty() {
    return this.size() === 0
  }
  add(value) {
    this.heap.push(value)
    this._shiftUp(this.size() - 1)
  }
  removeMax() {
    this._shiftDown(0)
  }
  _shiftUp(k) {
    while (this.heap[k] > this.heap[this.getParentIndex(k)]) {
      [this.heap[k], this.heap[this.getParentIndex(k)]] = [this.heap[this.getParentIndex(k)], this.heap[k]]
      k = this.getParentIndex(k)
    }
  }
  _shiftDown(k) {
    [this.heap[k], this.heap[this.size() - 1]] = [this.heap[this.size() - 1], this.heap[k]]
    this.heap.splice(this.size() - 1, 1)
    while (this.getLeftIndex(k) < this.size()) {
      let j = this.getLeftIndex(k)
      if (j + 1 < this.size() && this.heap[j + 1] > this.heap[j]) j++
      if (this.heap[k] >= this.heap[j]) break
      [k, j] = [j, k]
      k = j
    }
  }
  getParentIndex(k) {
    return parseInt((k - 1) / 2)
  }
  getLeftIndex(k) {
    return k * 2 + 1
  }
}

// let h = new MaxHeap()
// h.add(3)
// h.add(8)
// h.removeMax()
// h.add(4)
// h.add(0)
// h.add(1)
// h.add(5)

// console.log(h)