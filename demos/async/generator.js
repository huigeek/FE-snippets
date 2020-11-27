const fs = require('fs')

const readFile = function (fileName) {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, (err, data) => {
      if (err) return reject(err)
      resolve(data)
    })
  })
}

const generator = function*() {
  let v1 = yield readFile('./files/test1.txt')
  let v2 = yield readFile('./files/test2.txt')
  console.log(v1.toString())
  console.log(v2)
}

// let gr = generator()
// gr.next()
// gr.next()