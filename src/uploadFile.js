import options from './store/index'
import { createProgressSection } from './helpers/renderer'
import { createCORSRequest } from './helpers/cors'
import { readFile } from './helpers/file'

const uploadSingleFile = (file, i) => {
  const formData = new FormData()
  formData.append(options.name, file)

  const xhr = createCORSRequest('POST', options.url) 
  if (!xhr) {
    alert('CORS not supported')
    return
  }

  const progressBar = {
    preview: null,
    bar: null
  }

  xhr.addEventListener('loadstart', e => loadstartHandler(e, progressBar), false)
  xhr.upload.addEventListener("progress", e => progressHandler(e, progressBar), false)
  xhr.addEventListener("load", e => completeHandler(e, progressBar), false)
  xhr.addEventListener("error", e => errorHandler(e), false)
  xhr.addEventListener("abort", e => abortHandler(e), false)
  xhr.open("POST", options.url)
  xhr.send(formData)

  readFile(file).then(res => {
    progressBar.preview.style.backgroundImage = `url("${res}")`
  })

}

const loadstartHandler = (event, progressBarOpt) => {
  // console.log('loadstart', event)
  const { preview, progressBar } = createProgressSection(options.target)
  progressBarOpt.bar = progressBar
  progressBarOpt.preview = preview

} 

const progressHandler = (event, progressBar) => {
  // console.log('progress', event)
  let percent = Math.round(event.loaded / event.total * 100)
  progressBar.bar.style.width = percent + '%'
  progressBar.bar.innerText = percent + '%'
}

const completeHandler = (event, progressBar) => {
  console.log('complete', event)
  progressBar.bar.style.backgroundColor = 'green'
}

const errorHandler = (event) => {
  console.log('error')
}

const abortHandler = (event) => {
  console.log('abort')
}

export default (files) => {
  for (let i = 0 ; i < files.length ; i++) {
    uploadSingleFile(files[i], i)
  }
}