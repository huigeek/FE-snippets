// 实现效果，点击容器内的图标，图标边框变成border 1px solid red，点击空白处重置

// <div id="box"><button class="icon">btn</button><button class="icon">btn</button></div>

const box = document.querySelector('#box')

function isIcon (target) {
  return target.className.includes('icon')
}

box.addEventListener('click', fn, true)

function fn (e) {
  // e.target
  const target = e.target
  if (isIcon(target)) {
    target.style.border = '1px solid red'
  }
}

// document.addEventListener('click', removeStyle, false)
document.onclick = removeStyle

function removeStyle () {
  const children = box.querySelectorAll('.icon')
  children.forEach(d => d.style.border = 'none')
}