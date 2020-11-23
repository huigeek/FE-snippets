class TrieNode {
  constructor() {
    this.path = 0
    this.end = 0
    this.next = new Array(26).fill(null)
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode()
  }
  insert(str) {
    if (!str) return
    let node = this.root
    for (let i = 0; i < str.length; i++) {
      let idx = str[i].charCodeAt() - 'a'.charCodeAt()
      if (!node.next[idx]) {
        node.next[idx] = new TrieNode()
      }
      node.path++
      node = node.next[idx]
    }
    node.end++
  }
  search(str) {
    if (!str) return
    let node = this.root
    for (let i = 0; i < str.length; i++) {
      let idx = str[i].charCodeAt() - 'a'.charCodeAt()
      if (!node.next[idx]) return 0
      node = node.next[idx]
    }
    return node.end
  }
  delete(str) {
    if (!this.search(str)) return
    let node = this.root
    for (let i = 0; i < str.length; i++) {
      let idx = str[i].charCodeAt() - 'a'.charCodeAt()
      if (--node.next[idx].path == 0) {
        node.next[idx] = null
        return 
      }
      node = node.next[idx]
    }
    node.end--
  }
}

// let t = new Trie()
// console.log(t)
// console.log(t.search('bb'))
// console.log(t.search('abd'))
// t.delete('abd')
// console.log(t.search('abd'))
