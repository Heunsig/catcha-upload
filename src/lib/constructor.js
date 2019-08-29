import Renderer from './render'
import pjson from '../../package.json'  

export default function Constructor (target, opts) {
  this.version = pjson.version
  this.target = null
  this.url = 'http://localhost:8080'
  this.inputFileName = 'media'

  this.style = {
    width: '500px',
    dropZoneHeight: '150px'
  }

  this.rules = {
    maximumFileSize: 10 * 1024 * 1024,
    minimumFileSize: 0,
    maximumFileNumber: 0
  }

  this.storageType = 'server' // server, s3
  this.s3 = {
    IdentityPoolId: '',
    region: '',
    bucket: '',
    // accessKeyId: '',
    // secretAccessKey: '',
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

  const test = Object.assign({}, this, {
    ...opts,
    style: {
      ...this.style,
      ...opts.style
    },

    rules: {
      ...this.rules,
      ...opts.rules
    },
    s3: {
      ...this.s3,
      ...opts.s3
    }
  })

  Object.assign(this, test)
}

Constructor.prototype.render = function () {
  const renderer = new Renderer(this)
  renderer.init()
}