// 跟日期相关的js片段

// dayOfYear
// 返回当前是今年的第几天 
const dayOfYear = date => Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24)

console.log(dayOfYear(new Date()))
