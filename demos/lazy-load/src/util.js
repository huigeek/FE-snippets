
export default function isEleInnerView (ele) {
  // judge the element is in viewport or not
  const scroll = window.scrollY || window.pageYOffset

  const boundsTop = ele.getBoundingClientRect().top + scroll

  const viewport = {
    top: scroll,
    bottom: scroll + window.innerHeight
  }
  const bounds = {
    top: boundsTop,
    bottom: boundsTop + ele.clientHeight
  }

  return (bounds.bottom >= viewport.top && bounds.bottom <= viewport.bottom) || 
    (bounds.top <= viewport.bottom && bounds.top >= viewport.top)
}