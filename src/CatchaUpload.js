import options from './stores/index'
import renderInit from './renderInit'
import uploadFiles from './uploadFile'
import wording from './stores/wording'
import { updateMsgAndSubmit } from './helpers/renderer' 


'use strict'
const CatchaUpload = (element, opts) => {
  Object.assign(options, { target: element }, opts)

  const { inpFile, form } = renderInit()

  form.addEventListener('submit', function (e) {
    e.preventDefault()

    uploadFiles(inpFile.files)
    inpFile.value = ''
    updateMsgAndSubmit(form, inpFile.files.length)
  })
}

export default CatchaUpload