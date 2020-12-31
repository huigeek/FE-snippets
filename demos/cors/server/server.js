const express = require('express')
const app = express()

app.use(express.static('./'))

app.use((req, res, next) => {
  // response set header
  console.log('-----', req.headers)
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials'
  )
  res.statusCode = 204
  res.setHeader('Content-Length', '0')
  res.send('xxx')
  res.end()
  next()
})

app.listen(3000, () => console.log('app is runing on 3000'))