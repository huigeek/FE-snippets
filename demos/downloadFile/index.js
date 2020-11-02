const express = require('express')
const app = express()
const path = require('path')

app.use(express.static('src'))

app.get('/downloadFile.do', (req, res) => {
  const options = {
    root: path.join(__dirname, 'files'),
    dotfiles: 'deny',
    headers: {
      'x-timestamp': Date.now(),
      'x-sent': true
    }
  }

  res.sendFile(`${req.query.name}.txt`, options, (err) => {
    if (err) {
      next(err)
    }
    else {
      console.log('已下载')
    }
  })
})

app.listen(3000, () => {
  console.log('app is listening on port 3000')
})