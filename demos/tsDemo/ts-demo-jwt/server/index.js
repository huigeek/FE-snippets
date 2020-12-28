const express = require('express')
const formidable = require('express-formidable')
const jwt = require('jsonwebtoken')

const app = express()

app.use(formidable({
  multiples: true
}))

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Request-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials'
  )
  next()
})

const secret = 'ts-demo-jwt-secret'

app.post('/login', (req, res) => {
  // 根据客户端发送的用户名和密码，生成token，返回给客户端
  console.log('---req--', req.fields)
  const {username, password} = req.fields
  const token = jwt.sign({ username }, 'ts-demo-jwt-secret')
  res.send({ username, token })
})

app.listen(3000)