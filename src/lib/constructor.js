import Renderer from './render'
import pjson from '../../package.json'  

export default function Constructor (target, opts) {
  this.version = pjson.version
  this.target = null
  this.width = '500px'
  this.dropZoneSize = '150px'
  this.url = 'http://localhost'
  this.inputFileName = 'media'
  this.maximumFileSize = 5000000
  this.minimumFileSize = 0
  this.maximumFileNumber = 0
  this.storageType = 'server' // server, s3
  this.s3 = {
    accessKeyId: '',
    secretAccessKey: '',
    region: '',
    bucket: ''
  }

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