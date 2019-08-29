export function loadstartHandler (fileStatusBar) { 
  fileStatusBar.renderStatusInProgress()
} 

export function progressHandler (progress,  fileStatusBar) {
  let percent = Math.round(progress.loaded / progress.total * 99)
  fileStatusBar.changePercentage(percent)
}

export function completeHandler (err, data,  fileStatusBar) {
  fileStatusBar.complete()
  fileStatusBar.changePercentage(100)
  fileStatusBar.fileStatus.addFileUploaded(fileStatusBar)
}

// export function errorHandler (event) {
//   console.log('error')
// }

// export function abortHandler (event) {
//   console.log('abort')
// }