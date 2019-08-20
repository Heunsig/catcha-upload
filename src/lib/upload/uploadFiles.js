import send from './send'

export default function Upload (catchaUpload, filesReady) {
  this.catchaUpload = catchaUpload
  this.fileName = catchaUpload.fileName
  this.filesReady = filesReady

  console.log('aa', filesReady)
}

Upload.prototype.upload = function () {
  console.log('??', this.filesReady)
  for (let i = 0 ; i < this.filesReady.length ; i++) {
    this.uploadSingleFile(this.filesReady[i])
  }
}

Upload.prototype.uploadSingleFile = function (fileStatusBar) {
  const formData = new FormData()
  formData.append(this.fileName, fileStatusBar.file)

  send(this.catchaUpload, formData, fileStatusBar)
}
// import CatchaUpload from '../catchaUpload'
// import FileStatus from '../newRenderers/FileStatus'

// export function uploadFiles (renderer) {
//   for (let i = 0 ; i < FileStatus.filesReady.length ; i++) {
//     uploadSingleFile(FileStatus.filesReady[i])
//   }
// }


// function uploadSingleFile (fileStatusBar) {
//   const formData = new FormData()
//   formData.append(CatchaUpload.fileName, fileStatusBar.file)

//   send(formData, fileStatusBar)
// }