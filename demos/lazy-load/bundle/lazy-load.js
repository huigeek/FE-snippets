(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global['lazy-load'] = factory());
}(this, (function () { 'use strict';

  function isEleInnerView (ele) {
    // judge the element is in viewport or not
    const scroll = window.scrollY || window.pageYOffset;

    const boundsTop = ele.getBoundingClientRect().top + scroll;

    const viewport = {
      top: scroll,
      bottom: scroll + window.innerHeight
    };
    const bounds = {
      top: boundsTop,
      bottom: boundsTop + ele.clientHeight
    };

    return (bounds.bottom >= viewport.top && bounds.bottom <= viewport.bottom) || 
      (bounds.top <= viewport.bottom && bounds.top >= viewport.top)
  }

  class LazyLoad {
    constructor(){}
    loadImage (ele, imgUrl) {
      const me = this;
      
      window.addEventListener('load', function(){
        if (me._shouldLoadImg(ele)) {
          ele.src = imgUrl;
        }
      });
      window.addEventListener('scroll', function () {
        if (me._shouldLoadImg(ele)) {
          ele.src = imgUrl;
        }
      });
    }
    
    _shouldLoadImg (ele) {
      return isEleInnerView(ele) && !ele.src
    }
  }

  function createLazyLoadInstance () {
    return new LazyLoad()
  }

  return createLazyLoadInstance;

})));
