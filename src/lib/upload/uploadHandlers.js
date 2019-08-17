export function loadstartHandler (event, fileStatusBar) { } 

export function progressHandler (event, fileStatusBar) {
  let percent = Math.round(event.loaded / event.total * 100)

  fileStatusBar.progressingBar(percent)
}

export function completeHandler (event, fileStatusBar) {
  fileStatusBar.completedBar()
}

export function errorHandler (event) {
  console.log('error')
}

export function abortHandler (event) {
  console.log('abort')
}