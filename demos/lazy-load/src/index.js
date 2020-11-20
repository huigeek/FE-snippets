import isEleInnerView from './util.js'

class LazyLoad {
  constructor(){}
  loadImage (ele, imgUrl) {
    const me = this
    
    window.addEventListener('load', function(){
      if (me._shouldLoadImg(ele)) {
        ele.src = imgUrl
      }
    })
    window.addEventListener('scroll', function () {
      if (me._shouldLoadImg(ele)) {
        ele.src = imgUrl
      }
    })
  }
  
  _shouldLoadImg (ele) {
    return isEleInnerView(ele) && !ele.src
  }
}

function createLazyLoadInstance () {
  return new LazyLoad()
}

export default createLazyLoadInstance