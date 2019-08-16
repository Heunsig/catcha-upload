export function loadstartHandler (event, progressBar) {

} 

export function progressHandler (event, progressBar) {
  let percent = Math.round(event.loaded / event.total * 100)

  progressBar.bar.style.width = percent + '%'
  progressBar.bar.innerText = percent + '%'
}

export function completeHandler (event, progressBar) {
  console.log('complete', event)
  progressBar.bar.style.backgroundColor = 'green'
}

export function errorHandler (event) {
  console.log('error')
}

export function abortHandler (event) {
  console.log('abort')
}