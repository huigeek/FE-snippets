const Koa = require('koa')
const app = new Koa()

app.use(async (ctx) => {
  const url = ctx.url
  // get query and querystring from ctx.request
  const request = ctx.request
  const req_query = request.query
  const req_querystring = request.querystring

  // get query and querystring from ctx
  const ctx_query = ctx.query
  const ctx_querystring = ctx.querystring

  ctx.body = {
    url,
    req_query,
    req_querystring,
    ctx_query,
    ctx_querystring
  }
})

app.listen(3000, () => console.log('app is starting at 3000'))