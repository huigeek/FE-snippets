// 实现一个简单的模板引擎

// let template = '我是{{name}}，年龄{{age}}，性别{{sex}}';
// let data = {
//   name: '姓名',
//   age: 18
// }
// render(template, data); // 我是姓名，年龄18，性别undefined

function render(template, data) {
  const reg = /\{\{(\w+)\}\}/
  if (reg.test(template)) {
    const name = reg.exec(template)[1]
    template = template.replace(reg, data[name])
    return render(template, data)
  }
  return template
}

function render2(template, data) {
  const reg = /\{\{(\w+)\}\}/
  let name
  while (name = reg.exec(template)) {
    template = template.replace(reg, data[name[1]])
  }
  return template
}

function render3(template, data) {
  return template.replace(new RegExp('{{(.*?)}}', 'g'), (match, key) => data[key.trim()])
}

function render4(template, data) {
  const reg = /\{\{(\w+)\}\}/g
  return template.replace(reg, (v1, v2) => data[v2])
}

// let template = '我是{{name}}，年龄{{age}}，性别{{sex}}';
// let data = {
//   name: '姓名',
//   age: 18
// }
// console.log(render3(template, data)); // 我是姓名，年龄18，性别undefined
// console.log(render4(template, data)); // 我是姓名，年龄18，性别undefined

