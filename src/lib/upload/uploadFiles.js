import send from './send'

export function uploadFiles (url, fileName, fileList) {
  for (let i = 0 ; i < fileList.filesReady.length ; i++) {
    uploadSingleFile(url, fileName, fileList, fileList.filesReady[i])
  }
}


function uploadSingleFile (url, fileName, fileList, fileStatusBar) {
  const formData = new FormData()
  formData.append(fileName, fileStatusBar.file)

  send(formData, url, fileList, fileStatusBar)
}