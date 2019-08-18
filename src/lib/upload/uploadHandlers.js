export function loadstartHandler (event, fileList, fileStatusBar) { } 

export function progressHandler (event, fileList, fileStatusBar) {
  let percent = Math.round(event.loaded / event.total * 100)

  fileStatusBar.progressingBar(percent)
}

export function completeHandler (event, fileList, fileStatusBar) {
  fileStatusBar.completedBar()
  fileList.addFileUploaded(fileStatusBar)
}

export function errorHandler (event) {
  console.log('error')
}

export function abortHandler (event) {
  console.log('abort')
}