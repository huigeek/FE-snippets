const express = require('express')
const app = express()
const path = require('path')
const multer = require('multer')
const upload = multer({dest: 'files'})

const port = process.env.port || 3000

app.use(upload.any())
app.use(express.static(path.join(__dirname, 'src')))

app.post('/uploadFile.do', (req, res) => {
  res.send('post request to page')
})

app.listen(port, () => {
  console.log(`app is runing on port: ${port}`)
})
