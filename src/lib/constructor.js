export default function Constructor () {
  this.target = null
  this.url = 'http://localhost'
  this.fileName = 'media'
  this.maximumFileSize = 5000000
  this.minimumFileSize = 0
}

Constructor.prototype.init = function (element, opts) {
  this.target = element ? element:null

  Object.assign(this, opts)
}