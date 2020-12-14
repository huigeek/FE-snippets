const express = require('express')
const app = express()

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length')
  res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS')
  res.header('X-Powered-By', '3.2.1')
  next()
})

app.get('/getInfo', (req, res, next) => {
  setTimeout(() => {
    res.status = 200
    res.send('yy')
  }, 5000)
})

const port = 3000
app.listen(port, () => console.log(`app is runing on port: ${port}`))
