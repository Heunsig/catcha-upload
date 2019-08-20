import Renderer from './render'  

export default function Constructor (target, opts) {
  this.target = null
  this.url = 'http://localhost'
  this.inputFileName = 'media'
  this.maximumFileSize = 5000000
  this.minimumFileSize = 0
  this.maximumFileNumber = 0

  if (target) {
    this.setTarget(target)
  }

  if (opts) {
    this.setOpts(opts)
  }

  this.render()
}

Constructor.prototype.setTarget = function (target) {
  this.target = target
}

Constructor.prototype.setOpts = function (opts) {
  Object.assign(this, opts)
}

Constructor.prototype.render = function () {
  const renderer = new Renderer(this)
  renderer.init()
}