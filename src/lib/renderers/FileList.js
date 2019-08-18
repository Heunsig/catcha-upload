import FileStatusBar from '../renderers/FileStatusBar'
import { uniqueID } from '../helpers/string'
// import { isValidated } from '../validate/index'

export default function FileList () {
  this.mainElement = document.createElement('div')
  this.filesReadySection = document.createElement('div')
  this.filesDeclinedSection = document.createElement('div')
  // this.elementForFilesFailed = document.createElement('div')
  this.filesUploaded = []
  this.filesDeclined = []
  this.filesReady = []
}

function setAttrs () {
  this.filesReadySection.classList.add('cau-file-list')
  // temp 
  this.filesDeclinedSection.style.background = 'red'
  // temp
}


function removeFile (fileArray, fileStatusBar) {
  return fileArray.filter(bar => {
    if (bar !== fileStatusBar) {
      return bar
    }
  })
}

function removeFileStatusBar (id, parentElement) {
  parentElement.querySelector(`[data-id='${id}']`).remove()
}

FileList.prototype.render = function () {
  setAttrs.call(this)
  this.mainElement.appendChild(this.filesReadySection)
  this.mainElement.appendChild(this.filesDeclinedSection)

  return this.mainElement
}

FileList.prototype.remove = function (fileStatusBar) {
  if (fileStatusBar.hasErrors()) {
    this.filesDeclined = removeFile(this.filesDeclined, fileStatusBar)
  } else {
    this.filesReady = removeFile(this.filesReady, fileStatusBar)
  }

  removeFileStatusBar(fileStatusBar.id, this.mainElement)
}


// it clears only files, not fileStatusBar elements
FileList.prototype.clearOnlyFiles = function () {
  this.filesReady = []
}

FileList.prototype.addFileUploaded = function (fileStatusBar) {
  this.filesUploaded.push(fileStatusBar)
}

FileList.prototype.addFileReady = function (fileStatusBar) {
  this.filesReadySection.appendChild(fileStatusBar.render())
  this.filesReady.push(fileStatusBar)
}

FileList.prototype.addFileDeclined = function (fileStatusBar) {
  this.filesDeclinedSection.appendChild(fileStatusBar.render())
  this.filesDeclined.push(fileStatusBar)
}


