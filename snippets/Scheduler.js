// js 实现一个带并发限制的异步调度器 Scheduler, 保证同时运行的任务最多有两个
class Scheduler {
  constructor (num) {
    this.list = []
    this.count = 0
    this.num = num
  }
  async add(fn) {
    if (this.count >= this.num) await new Promise(resolve => this.list.push(resolve))
    this.count++
    const result = await fn()
    this.count--
    (this.list.length > 0) && this.list.shift()()
    return result
  }
}

// const scheduler = new Scheduler(2)
// const timeout = time => new Promise(r => setTimeout(r, time))

// const addTask = (time, order) => scheduler.add(() => timeout(time)).then(() => console.log(order))

// addTask(1000, 1)
// addTask(500, 2)
// addTask(300, 3)
// addTask(400, 4)
// // 2 3 1 4