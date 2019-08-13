import options from './options'
import { createProgressSection } from './helpers/renderers'
import readFile from './helpers/readFile'

const createCORSRequest = (method, url) => {
  var xhr = new XMLHttpRequest();
  if ("withCredentials" in xhr) {

    // Check if the XMLHttpRequest object has a "withCredentials" property.
    // "withCredentials" only exists on XMLHTTPRequest2 objects.
    xhr.open(method, url, true);

  } else if (typeof XDomainRequest != "undefined") {

    // Otherwise, check if XDomainRequest.
    // XDomainRequest only exists in IE, and is IE's way of making CORS requests.
    xhr = new XDomainRequest();
    xhr.open(method, url);

  } else {

    // Otherwise, CORS is not supported by the browser.
    xhr = null;

  }
  return xhr;
}

const uploadSingleFile = (file, i) => {
  const formData = new FormData()
  formData.append('media', file)

  const xhr = createCORSRequest('POST', options.url) 
  if (!xhr) {
    alert('CORS not supported')
    return
  }

  const progressBar = {
    test: null,
    target: null
  }

  xhr.addEventListener('loadstart', e => loadstartHandler(e, progressBar), false)
  xhr.upload.addEventListener("progress", e => progressHandler(e, progressBar), false)
  xhr.addEventListener("load", e => completeHandler(e, progressBar), false)
  xhr.addEventListener("error", e => errorHandler(e), false)
  xhr.addEventListener("abort", e => abortHandler(e), false)
  xhr.open("POST", options.url)
  xhr.send(formData)

  // readFile(file, progressBar)
}

const loadstartHandler = (event, progressBarOpt) => {
  console.log('loadstart', event)
  const { preview, progressBar } = createProgressSection()
  progressBarOpt.target = progressBar
  progressBarOpt.test = preview

} 

const progressHandler = (event, progressBar) => {
  console.log('progress', event)
  let percent = Math.round(event.loaded / event.total * 100)
  progressBar.target.style.width = percent + '%'
  progressBar.target.innerText = percent + '%'
}

const completeHandler = (event, progressBar) => {
  console.log('complete', event)
  progressBar.target.style.backgroundColor = 'green'
}

const errorHandler = (event) => {
  console.log('error')
}

const abortHandler = (event) => {
  console.log('abort')
}

export default (files) => {
  for (let file of files) {
    uploadSingleFile(file)
  }
}