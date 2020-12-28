// login

window.onload = function(){
  const formElem = document.querySelector('form')

  formElem.addEventListener('submit', (e) => {
    e.preventDefault()
    let data = new FormData(formElem)
    console.log('===', data)
    for (let v of data) {
      console.log(v)
    }
  })

  // formElem.addEventListener('formdata', (e) => {
  //   console.log('formdata fired')

  //   // Get the form data from the event object
  //   let data = e.formData
  //   for (var value of data.values()) {
  //     console.log(value)
  //   }

  //   // submit the data via XHR
  //   var request = new XMLHttpRequest()
  //   request.open("POST", "/formHandler")
  //   request.send(data)
  // })

}
