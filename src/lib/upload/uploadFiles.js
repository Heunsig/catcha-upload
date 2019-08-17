import send from './send'

export function uploadFiles (url, fileName, fileList) {
  // console.log('fileList', fileList)
  for (let i = 0 ; i < fileList.fileStatusBars.length ; i++) {
    uploadSingleFile(url, fileName, fileList.fileStatusBars[i])
  }
}


function uploadSingleFile (url, fileName, fileStatusBar) {
  const formData = new FormData()
  formData.append(fileName, fileStatusBar.file)

  send(formData, url, fileStatusBar)
}