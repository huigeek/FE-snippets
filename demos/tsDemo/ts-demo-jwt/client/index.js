// login

window.onload = () => {
  const formElem = document.querySelector('form')

  formElem.addEventListener('submit', (e) => {
    e.preventDefault()
    new FormData(formElem)
  })

  formElem.addEventListener('formdata', (e) => {

    // Get the form data from the event object
    let data = e.formData

    // submit the data via XHR
    var request = new XMLHttpRequest()
    request.onreadystatechange = function(){
      if (request.readyState === 4 && (request.status === 200)) {
        // 取到token后保存到sessionStorage里，之后其他接口就可以带token了
        const res = JSON.parse(request.response)
        !window.sessionStorage.getItem('token') && window.sessionStorage.setItem('token', res.token)
        formElem.innerHTML = `用户名: ${res.username}; <br/>token: ${res.token}`
      }
    }
    // 这里请求服务端地址是server目录下开的服务器。
    // 直接请求会有跨域问题，所以server里还需要配合设置cors
    request.open("POST", "http://localhost:3000/login")
    request.send(data)
  })
}
