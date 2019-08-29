import { createCORSRequest } from './cors'
import {
  loadstartHandler,
  progressHandler,
  completeHandler,
  errorHandler,
  abortHandler
} from './handlers'

export default (url, formData, fileStatusBar) => {
  const xhr = createCORSRequest('POST', url)
  if (!xhr) {
    alert('CORS not supported')
    return
  }

  xhr.addEventListener('loadstart', e => loadstartHandler(e, fileStatusBar), false)
  xhr.upload.addEventListener("progress", e => progressHandler(e, fileStatusBar), false)
  xhr.addEventListener("load", e => completeHandler(e, fileStatusBar), false)
  xhr.addEventListener("error", e => errorHandler(e), false)
  xhr.addEventListener("abort", e => abortHandler(e), false)
  xhr.open("POST", url)
  xhr.send(formData)
}