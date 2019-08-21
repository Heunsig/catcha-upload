import send from './send'
import sendToS3 from './sendToS3'

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

Upload.prototype.uploadToS3 = function (requirements) {
  for (let i = 0 ; i < this.filesReady.length ; i++) {
    sendToS3(this.filesReady[i], requirements)
  }
}