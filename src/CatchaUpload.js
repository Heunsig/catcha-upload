import CatchaUploadConstructor from './lib/constructor'
// import renderInit from './renderInit'
import renderInit from './lib/renderers/init'

import { uploadFiles } from './lib/upload/uploadFiles'
import wording from './stores/wording'
import { updateMsgAndSubmit } from './helpers/renderer' 

'use strict'
const CatchaUpload = function (element, opts) {
  CatchaUploadConstructor.call(this, element, opts)

  // const { eleInputFile, eleForm } = renderInit.call(this)
  renderInit.call(this)  


  // Attach event on the main form
  // eleForm.addEventListener('submit', (e) => {
  //   e.preventDefault()

  //   uploadFiles.call(this, eleInputFile.files)

  //   eleInputFile.value = ''
  //   updateMsgAndSubmit(eleForm, eleInputFile.files.length)
  // })
}

export default CatchaUpload