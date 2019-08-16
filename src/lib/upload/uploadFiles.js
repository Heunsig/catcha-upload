import send from './send'
import progressBar from '../renderers/processBar'

export function uploadFiles (files) {
  for (let i = 0 ; i < files.length ; i++) {
    uploadSingleFile.call(this, files[i], i)
  }
}

export function uploadSingleFile (file, index) {
  const target = this.target
  const url = this.url
  const fileName = this.fileName

  const formData = new FormData()
  formData.append(fileName, file)

  const pBar = new progressBar(target, file)
  send(formData, url, pBar)
}