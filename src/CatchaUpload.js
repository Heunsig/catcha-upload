'use strict'

import CatchaUpload from './lib/catchaUpload'
import renderInit from './lib/renderers/init'

export default function (element, opts) {
  CatchaUpload.init(element, opts)

  renderInit()

  return CatchaUpload
}

