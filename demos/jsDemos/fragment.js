//  创建一个文档片段, 它只在内存中，并没有插入到DOM中
const frag = document.createDocumentFragment()

// 在文档片段里，插入新建的节点
for (let x = 0; x < 10; x++) {
  const li = document.createElement('li')
  li.innerHTML = 'List item' + x
  // 先插入到文档片段中
  frag.appendChild(li)
}

// 所有都完成后，再把文档片段一次性插入到 DOM 中
document.body.appendChild(frag)
