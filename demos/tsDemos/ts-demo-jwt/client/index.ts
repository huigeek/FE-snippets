import ajax from './src/utils/ajax'
import './src/interface'
// login

window.onload = () => {
  const formElem = document.querySelector('form')

  formElem.addEventListener('submit', (e) => {
    e.preventDefault()
    new FormData(formElem)
  })

  formElem.addEventListener('formdata', (e) => {

    // Get the form data from the event object
    let data = e['formData']

    const obj = {
      method: 'POST',
      url: 'http://localhost:3000/login',
      data
    }

    ajax(obj)
      .then((res: Res) => {
        // 取到token后保存到sessionStorage里，之后其他接口就可以带token了
        !window.sessionStorage.getItem('token') && window.sessionStorage.setItem('token', res.token)
        formElem.innerHTML = `用户名: ${res.username}; <br/>token: ${res.token}`
      })
  })
}
