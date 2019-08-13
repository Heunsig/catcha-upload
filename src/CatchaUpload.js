import options from './stores/index'
import renderInit from './renderInit'
import uploadFiles from './uploadFile'
import wording from './stores/wording'

'use strict'
const CatchaUpload = (element, opts) => {
  Object.assign(options, { target: element }, opts)

  const { inpFile, form, msg } = renderInit()

  form.addEventListener('submit', function (e) {
    e.preventDefault()

    msg.innerText = wording.guidance()
    uploadFiles(inpFile.files)
  })
}

export default CatchaUpload