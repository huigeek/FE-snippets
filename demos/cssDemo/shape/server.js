const liveServer = require('live-server')

const params = {
  port: 8081,
  host: '0.0.0.0',
  open: true,
  ignore: 'scss',
  file: 'index.html',
  wait: 1000,
  mount: [['/components', './node_modules']],
  logLevel: 2,
  middleware: [function(req, res, next){next()}]
}

liveServer.start(params)