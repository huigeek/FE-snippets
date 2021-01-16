// 纯函数

// 编码原则：
// DRY（不要重复自己，don't repeat yourself）
// 高内聚低耦合（loose coupling high cohesion）
// YAGNI （你不会用到它的，ya ain't gonna need it）
// 最小意外原则（Principle of least surprise）
// 单一责任（single responsibility）等等

// 什么是纯函数
// Consistency between arguments and output. Same arguments would always return the same output value, regardless of any external factors.
// No side effects.

// 副作用的例子：
// Mutating your input — modifying your input should only be done after cloning it.
// Modifying a mutable data structure
// console.log — as it prints something on the screen.
// HTTP calls (AJAX/fetch)
// Changing the filesystem (fs)
// Querying the DOM
// Throwing an exception

// 合理使用纯函数，使我们代码更简洁、优雅
