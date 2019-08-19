'use strict'

import CatchaUpload from './lib/catchaUpload'
// import renderInit from './lib/renderers/init'
import Renderer from './lib/newRenderers/index'

export default function (element, opts) {
  CatchaUpload.init(element, opts)
  Renderer.init(CatchaUpload.target)

  return CatchaUpload
}

