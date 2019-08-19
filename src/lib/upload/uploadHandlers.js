import FileStatus from '../newRenderers/FileStatus'

export function loadstartHandler (event,  fileStatusBar) { 
  fileStatusBar.renderStatusInProgress()
} 

export function progressHandler (event,  fileStatusBar) {
  let percent = Math.round(event.loaded / event.total * 100)
  fileStatusBar.changePercentage(percent)
}

export function completeHandler (event,  fileStatusBar) {
  fileStatusBar.complete()
  FileStatus.addFileUploaded(fileStatusBar)
}

export function errorHandler (event) {
  console.log('error')
}

export function abortHandler (event) {
  console.log('abort')
}