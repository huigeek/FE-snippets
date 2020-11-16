const Koa = require('koa')
const app = new Koa()
const bodyparser = require('koa-bodyparser')

app.use(bodyparser())

app.use(async (ctx) => {
  // ctx.request, ctx.req, ctx.response, ctx.res, ctx.method
  // get, post
  if (ctx.url === '/' && ctx.method === 'GET') {
    const html = `
      <form method="POST" action="/">
        <p>useName</p>
        <input name="userName">
        <br/>
        
        <p>email</p>
        <input name="email">
        <br/>

        <button type="submit">submit</button>
      </form>
    `
    ctx.body = html
  }
  else if (ctx.url === '/' && ctx.method === 'POST') {
    ctx.body = ctx.request.body
  }
  else {
    ctx.body = '<h1>404!</h1>'
  }
})

app.listen(3000, () => console.log('app is starting at 3000'))