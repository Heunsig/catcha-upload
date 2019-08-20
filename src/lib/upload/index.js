import send from './send'

export default function Upload (catchaUpload, filesReady) {
  this.catchaUpload = catchaUpload
  this.inputFileName = catchaUpload.inputFileName
  this.filesReady = filesReady
}

Upload.prototype.upload = function () {
  for (let i = 0 ; i < this.filesReady.length ; i++) {
    this.uploadSingleFile(this.filesReady[i])
  }
}

Upload.prototype.uploadSingleFile = function (fileStatusBar) {
  const formData = new FormData()
  formData.append(this.inputFileName, fileStatusBar.file)

  send(this.catchaUpload.url, formData, fileStatusBar)
}