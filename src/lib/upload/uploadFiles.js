import send from './send'

import CatchaUpload from '../catchaUpload'
import FileStatus from '../newRenderers/FileStatus'

export function uploadFiles () {
  for (let i = 0 ; i < FileStatus.filesReady.length ; i++) {
    uploadSingleFile(FileStatus.filesReady[i])
  }
}


function uploadSingleFile (fileStatusBar) {
  const formData = new FormData()
  formData.append(CatchaUpload.fileName, fileStatusBar.file)

  send(formData, fileStatusBar)
}