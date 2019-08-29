import send from './send'
import sendToS3 from './sendToS3'

export default function Upload (catchaUpload, filesReady) {
  this.catchaUpload = catchaUpload
  this.inputFileName = catchaUpload.inputFileName
  this.filesReady = filesReady
}

Upload.prototype.upload = function () {
  switch (this.catchaUpload.storageType) {
    case 'server':
      this.uploadToServer()
      return
    case 's3':
      this.uploadToS3({
        IdentityPoolId: this.catchaUpload.s3.IdentityPoolId,
        region: this.catchaUpload.s3.region,
        bucket: this.catchaUpload.s3.bucket
        // accessKeyId: catchaUpload.s3.accessKeyId,
        // secretAccessKey: catchaUpload.s3.secretAccessKey,
      })
      return
    default:
      throw new Error('storageType is required.')
  }
}

Upload.prototype.uploadToServer = function () {
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

