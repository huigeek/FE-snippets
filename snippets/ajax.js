// implement ajax

// ajax({
//   method: '',
//   url: '',
//   params
// })
// .then()
// .catch()


function formatData(data) {
  let sendUrl = ''
  for (let key in data) {
    sendUrl += `&${key}=${data[key]}`
  }
  sendUrl = sendUrl.slice(1)
  return sendUrl
}

function ajax ({method, url, data}) {
  return new Promise((resolve, reject) => {
    let sendUrl = formatData(data)
    if (method === 'GET') {
      url += `?${sendUrl}`
      sendUrl = null
    }
    const xhr = new XMLHttpRequest()
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (xhr.status === 200 || xhr.status === 304) {
          resolve(xhr.response)
        }
        else {
          reject(xhr)
        }
      }
    }
    xhr.open(method, url, true) // async
    xhr.send(sendUrl)
  })
}

// 实现简易ajax
// function myAjax(url, successFn) {
//   const xhr = new XMLHttpRequest()
//   xhr.onreadystatechange = function(){
//     if (xhr.readyState === 4 && (xhr.status === 200 || xhr.status === 304)) {
//       successFn(xhr.responseText)
//     }
//   }
//   xhr.open('GET', url, false) // sync
//   xhr.send(null)
// }

// function myAjax(url) {
//   return new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest()
//     xhr.onreadystatechange = function(){
//       if (xhr.readyState === 4 && (xhr.status === 200 || xhr.status === 304)) {
//         resolve(xhr.responseText)
//       }
//       else {
//         reject('error')
//       }
//     }
//     xhr.open('GET', url, false)
//     xhr.send(null)
//   })
// }

// myAjax('xx')
//   .then(res => {})
//   .catch(err => {})
