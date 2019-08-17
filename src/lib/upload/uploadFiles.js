import send from './send'
// import ProgressBar from '../renderers/ProgressBar'
import FileList from './FileList'

// const files = []

export function uploadFiles (files) {
  // for (let i = 0 ; i < files.length ; i++) {
  //   uploadSingleFile.call(this, files[i], i)
  // }
  for (let i = 0 ; i < files.length ; i++) {
    addFilesToWatingRoom.call(this, fileList, files[i], i)
  }
}

export function addFilesToWatingRoom (fileList, file, index) {
  // const target = this.target
  

  // // const progressBar = new ProgressBar(target, file)
  // const progressBar = new ProgressBar(target, file)
  // fileList.add(progressBar)
  // console.log(fileList)
  // progressBar.onClickRemove(function () {
  //   fileList.remove(progressBar)
  // })

  // files.push(progressBar)
}

export function printFilesReady () {
  const target = this.target

  for (let file of files) {
    target.appendChild(file.eleSection)
  }
}

export function uploadSingleFile (file, index) {
  const target = this.target
  const url = this.url
  const fileName = this.fileName

  const formData = new FormData()
  formData.append(fileName, file)

  // const pBar = new ProgressBar(target, file)
  // send(formData, url, pBar)
}