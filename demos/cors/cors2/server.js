const express = require('express')
const app = express()

app.use(express.static('./'))

app.listen(3001, () => console.log('app runing on port 3001'))
