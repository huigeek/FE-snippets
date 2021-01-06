// 最近的请求次数

// 写一个 RecentCounter 类来计算特定时间范围内最近的请求。

// 请你实现 RecentCounter 类：

// RecentCounter() 初始化计数器，请求数为 0 。
// int ping(int t) 在时间 t 添加一个新请求，其中 t 表示以毫秒为单位的某个时间，并返回过去 3000 毫秒内发生的所有请求数（包括新请求）。确切地说，返回在 [t-3000, t] 内发生的请求数。
// 保证 每次对 ping 的调用都使用比之前更大的 t 值。

```js
// 输入: inputs = [[], [1], [100], [3001], [3002]]
// 输出: [null, 1, 2, 3, 3]
```

// 初始为一个空数组，1ms入队一个请求，最近3000ms内，仅是它自身，最近请求次数为1；
// 100ms时入队一个请求，最近3000ms内，它自身、之前1ms时入队的请求，最近请求次数为2；
// 3001时入队一个请求，最近3000ms内，它自身、之前100ms、1ms时入队的请求，最近请求次数为3；
// 3002ms时入队一个请求，请求队列里有3001ms、100ms、1ms，由于1ms不在3000ms内，需出队，最近请求次数为3.

// - 有新请求就入队，3000ms前发出的请求出队.
// - 队列的长度就是最近请求次数.


class RecentCounter {
  constructor(){
    this.stack = []
  }
  ping(time){
    this.stack.push(time)
    while (time - this.stack[0] > 3000) {
      this.stack.shift()
    }
    return this.stack.length
  }
}

let rc = new RecentCounter()
console.log(rc.ping(1))
console.log(rc.ping(100))
console.log(rc.ping(3001))
console.log(rc.ping(3002))

