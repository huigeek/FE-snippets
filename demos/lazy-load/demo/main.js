const lazyLoad = window['lazy-load']
const imgUrls = [
  'https://raw.githubusercontent.com/haisheng-lin/animation/master/chapter1-1/rabbit-big.png',
  'https://raw.githubusercontent.com/haisheng-lin/animation/master/chapter1-1/rabbit-lose.png',
  'https://raw.githubusercontent.com/haisheng-lin/animation/master/chapter1-1/rabbit-win.png',
]

const imageDomCount = 12

function loadImage () {
  for (let i = 0; i < imageDomCount; i++) {
    const $image = $('image' + (i + 1))
    const randomImgUrl = getRandomItem(imgUrls)
    lazyLoad().loadImage($image, randomImgUrl)
    $image.onload = () => console.log(`image ${i + 1} loaded`)
  }
}

function $(id) {
  return document.querySelector(`#${id}`)
}

function getRandomItem (array) {
  const length = array.length
  const index = Math.floor(Math.random() * length)
  return array[index]
}

loadImage()
