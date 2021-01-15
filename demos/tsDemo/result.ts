// 定义一个数据项List接口
interface List {
  id: string
  name: string
  class: string
}

// 使用List接口定义Result接口
interface Result {
  data: List[]
  success: boolean
  msg: string
}

// render方法接收后台返回的result, result需要满足Result接口
function render(result: Result) {
  if (result.success) {
    // success
    result.data.forEach(v => console.log(v.id, v.name, v.class))
  }
  else {
    // error
  }
}

const result = {
  data: [
    {id: 'gadga', name: 'xx', class: '三年级一班'},
    {id: 'hkkkk', name: 'yy', class: '四年级三班'}
  ],
  success: true,
  msg: ''
}

render(result)
