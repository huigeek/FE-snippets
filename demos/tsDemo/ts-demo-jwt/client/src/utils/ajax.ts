import '../interface'

export default function ajax({method, url, data}) {
  return new Promise((resolve, reject) => {
    var request = new XMLHttpRequest()
    request.onreadystatechange = function(){
      if (request.readyState !== 4) return

      if (request.status >= 200 && request.status < 300 || request.status === 304) {
        const res: Res = JSON.parse(request.response)
        resolve(res)
      }
      else {
        reject(request)
      }
    }
    request.onerror = () => reject('network error')

    // 这里请求服务端地址是server目录下开的服务器。
    // 直接请求会有跨域问题，所以server里还需要配合设置cors
    request.open(method, url, true) // async
    request.send(data)
  })
}
