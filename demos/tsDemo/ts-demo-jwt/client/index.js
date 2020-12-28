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
    // 这里请求服务端地址是server目录下开的服务器。
    // 直接请求会有跨域问题，所以server里还需要配合设置cors
    request.open("POST", "http://localhost:3000/login")
    request.send(data)
  })
}
