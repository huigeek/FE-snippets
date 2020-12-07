// 用到node里模块的一些js片段

// 文件系统 fs， 使用 existsSync() 检查目录是否存在，如果不存在，使用 mkdirSync() 创建目录
const fs = require('fs')
const createDirIfNotExist = dir => !fs.existsSync(dir) ? fs.mkdirSync(dir) : undefined

// createDirIfNotExist('test')
