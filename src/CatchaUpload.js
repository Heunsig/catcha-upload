import options from './stores/index'
import renderInit from './renderInit'
import uploadFiles from './uploadFile'

'use strict'
const CatchaUpload = (element, opts) => {
  Object.assign(options, { target: element }, opts)

  const { inpFile, form } = renderInit()

  form.addEventListener('submit', function (e) {
    e.preventDefault()

    uploadFiles(inpFile.files)
  })
}

export default CatchaUpload