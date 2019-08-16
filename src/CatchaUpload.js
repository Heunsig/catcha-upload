'use strict'

import CatchaUploadConstructor from './lib/constructor'
import renderInit from './lib/renderers/init'


const CatchaUpload = function (element, opts) {
  CatchaUploadConstructor.call(this, element, opts)

  renderInit.call(this)
}

export default CatchaUpload