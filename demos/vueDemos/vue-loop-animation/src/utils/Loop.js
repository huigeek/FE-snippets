export class Base {
  constructor (el = 'body', cb = () => {}, time = 5000) {
    this.timer = null
    this.el = typeof el === 'object' ? el : document.querySelector(el)
    this.cb = cb
    this.time = time
  }
  _clear () {
    if (this.timer) {
      clearInterval(this.timer)
      this.timer = null
    }
  }
  play () {
    this._clear()
    this.timer = setInterval(this.cb, this.time)
  }
  pause () {
    this._clear()
  }
  destroy () {
    this._clear()
  }
}

export class ClickPageLoop extends Base {
  constructor (el, cb, time, playCb) {
    super(el, cb, time)
    this.playCb = playCb
    this.init()
  }
  init () {
    this.play()
    this.el.addEventListener('click', this._handleClickFn.bind(this))
  }
  _handleClickFn (ev) {
    if (~[...ev.target.classList].findIndex(cls => cls === 'page')) {
      this.destroy()
      this.playCb(ev)
      this.play()
    }
  }
}
