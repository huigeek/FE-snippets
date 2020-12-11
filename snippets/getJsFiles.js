// 场景需要，要把路径下所有js文件读出来，作一些操作

// 读到所有资源，判断是否是js文件，把路径取出来统一处理
// 这里仅针对js文件，其他需求可适当调整判断条件

const fs = require('fs')
const path = require('path')

const getJsFiles = filePath => {
  let jsFiles = [] // 遍历出所有js文件的路径

  const findFile = p => {
    let _files = fs.readdirSync(p) // 同步读到所有文件和文件夹
    _files.forEach((item, index) => {
      let fPath = path.join(p, item) // 拼路径
      // 是文件夹，递归；是文件且是js文件，push到jsFiles
      fs.statSync(fPath).isDirectory() ? findFile(fPath) : fs.statSync(fPath).isFile && /\.js$/.test(item) ? jsFiles.push(fPath) : ''
    })
  }

  findFile(filePath)
  // console.log(jsFiles)
  return jsFiles
}

// getJsFiles('./')