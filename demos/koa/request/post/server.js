const Koa = require('koa')
const app = new Koa()

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
    // 
    console.log('====', ctx)
    const postData = await parsePostData( ctx )
    ctx.body = postData
  }
  else {
    ctx.body = '<h1>404!</h1>'
  }
})

function parsePostData(ctx) {
  return new Promise((resolve, reject) => {
    try {
      let postdata = "";
      ctx.req.addListener('data', (data) => {
        postdata += data
      })
      ctx.req.addListener("end",function(){
        let parseData = parseQueryStr( postdata )
        resolve( parseData )
      })
    } catch (err) {
      reject(err)
    }
  })
}

function parseQueryStr( queryStr ) {
  let queryData = {}
  let queryStrList = queryStr.split('&')
  for (let [idx, queryStr ] of queryStrList.entries()) {
    const itemList = queryStr.split('=')
    queryData[itemList[0]] = decodeURIComponent(itemList[1])
  }
  return queryData
}


app.listen(3000, () => console.log('app is starting at 3000'))