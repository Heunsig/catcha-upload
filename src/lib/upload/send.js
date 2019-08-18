import { createCORSRequest } from '../helpers/cors'
import {
  loadstartHandler,
  progressHandler,
  completeHandler,
  errorHandler,
  abortHandler
} from './uploadHandlers'

export default (formData, url, fileList, fileStatusBar) => {
  const xhr = createCORSRequest('POST', url)
  if (!xhr) {
    alert('CORS not supported')
    return
  }

  xhr.addEventListener('loadstart', e => loadstartHandler(e, fileList, fileStatusBar), false)
  xhr.upload.addEventListener("progress", e => progressHandler(e, fileList, fileStatusBar), false)
  xhr.addEventListener("load", e => completeHandler(e, fileList, fileStatusBar), false)
  xhr.addEventListener("error", e => errorHandler(e), false)
  xhr.addEventListener("abort", e => abortHandler(e), false)
  xhr.open("POST", url)
  xhr.send(formData)
}