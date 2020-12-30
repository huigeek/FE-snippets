export default function ajax(method, url, data) {
  return new Promise((resolve, reject) => {
    var request = new XMLHttpRequest()
    request.onreadystatechange = function(){
      if (request.readyState === 4) {
        if (request.status === 200) {
          const res = JSON.parse(request.response)
          resolve(res)
        }
        else {
          reject(request)
        }
      }
    }
    // 这里请求服务端地址是server目录下开的服务器。
    // 直接请求会有跨域问题，所以server里还需要配合设置cors
    request.open(method, url)
    request.send(data)
  })
}
