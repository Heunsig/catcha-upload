import options from './options'
import { renderInit } from './helpers/renderers'
import uploadFiles from './uploadFile'
// import readFile from './helpers/readFile'

'use strict'
const CatchaUpload = (element, opts) => {
  // let options = {
  //   url: 'http://localhost',
  //   name: 'media',
  //   maximum_file_size: 5000000,
  //   minimum_file_size: 0
  // }

  // options = {...options, ...opts}
  Object.assign(options, { target: element }, opts)
  const { inpFile, form } = renderInit()

  // const form = document.createElement('form')
  // const inpFile = document.createElement('input')
  // const submit = document.createElement('button')
  // const msg = document.createElement('p')
  // inpFile.setAttribute('id', options.name)
  // inpFile.setAttribute('type', 'file')
  // inpFile.setAttribute('multiple', 'multiple')
  // inpFile.setAttribute('name', options.name)
  // submit.setAttribute('type', 'submit')
  // submit.innerText = 'Upload'
  // msg.innerText = 'Drag your files here or click in this area.'

  // element.classList.add('cau-wrapper')
  // form.classList.add('cau-form')
  // msg.classList.add('cau-msg')
  // inpFile.classList.add('cau-input-file')
  // submit.classList.add('cau-submit')

  // element.appendChild(form)
  // form.appendChild(inpFile)
  // form.appendChild(msg)
  // form.appendChild(submit)

  form.addEventListener('submit', function (e) {
    e.preventDefault()

    uploadFiles(inpFile.files)

    // for (let file of inpFile.files) {
    //   uploadSingleFile(file)
    // }
  })

  const validate = () => {

  }

  

  // const createProgressSection = () => {
  //   const section = document.createElement('div')
  //   const preview = document.createElement('div')
  //   const progressBox = document.createElement('div')
  //   const progressBar = document.createElement('div')
  //   // const img = document.createElement('img')

  //   section.classList.add('cau-progress')
  //   preview.classList.add('cau-preview')
  //   progressBox.classList.add('cau-progress-bar')
  //   progressBar.classList.add('cau-bar')

  //   // preview.appendChild(img)

    
  //   element.appendChild(section)
  //   section.appendChild(preview)
  //   section.appendChild(progressBox)
  //   progressBox.appendChild(progressBar)
  //   progressBar.innerText = '0%'

  //   return { section, preview, progressBox, progressBar }
  // }

  // const uploadSingleFile = (file, i) => {
  //   const formData = new FormData()
  //   formData.append('media', file)

  //   const xhr = createCORSRequest('POST', options.url) 
  //   if (!xhr) {
  //     alert('CORS not supported')
  //     return
  //   }

  //   const progressBar = {
  //     test: null,
  //     target: null
  //   }

  //   xhr.addEventListener('loadstart', e => loadstartHandler(e, progressBar), false)
  //   xhr.upload.addEventListener("progress", e => progressHandler(e, progressBar), false)
  //   xhr.addEventListener("load", e => completeHandler(e, progressBar), false)
  //   xhr.addEventListener("error", e => errorHandler(e), false)
  //   xhr.addEventListener("abort", e => abortHandler(e), false)
  //   xhr.open("POST", options.url)
  //   xhr.send(formData)

  //   readFile(file, progressBar)
  // }

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

}

CatchaUpload.prototype.test = () => {
  console.log()
}

export default CatchaUpload