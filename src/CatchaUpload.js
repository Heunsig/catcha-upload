'use strict'

// import CatchaUpload from './lib/catchaUpload'
// import renderInit from './lib/renderers/init'
import Constructor from './lib/constructor'
import Renderer from './lib/newRenderers/index'

export default function (element, opts) {
  const catchaUpload = new Constructor()
  catchaUpload.init(element, opts)

  const renderer = new Renderer(catchaUpload)
  renderer.init()
  // new 
  // CatchaUpload.init(element, opts)
  // Renderer.init(CatchaUpload.target)

  // return CatchaUpload
  return catchaUpload
}

