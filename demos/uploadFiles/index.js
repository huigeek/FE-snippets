const express = require('express')
const app = express()
const path = require('path')
const multer = require('multer')
const upload = multer({dest: 'files'})

const port = process.env.PORT || 3000 // process.env 对象里属性变量一般大写

app.use(upload.any())
app.use(express.static(path.join(__dirname, 'src')))

app.post('/uploadFile.do', (req, res) => {
  res.send('post request to page')
})

app.listen(port, () => {
  console.log(`app is runing on port: ${port}`)
})
