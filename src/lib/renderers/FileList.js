import FileStatusBar from '../renderers/FileStatusBar'
import { uniqueID } from '../helpers/string'
import { isValidated } from '../validate/index'

export default function FileList () {
  this.mainElement = document.createElement('div')
  this.filesNotAlowed = []
  this.fileStatusBars = []

  setAttrs.call(this)
}

function setAttrs () {
  this.mainElement.classList.add('cau-file-list')
}

FileList.prototype.add = function (newFile) {
  const id = uniqueID()
  const fileStatusBar = new FileStatusBar(id, newFile, this)

  // if (!isValidated(newFile)) {
  //   this.filesNotAlowed.push(fileStatusBar)
  //   return
  // }
  // isValidated(newFile)

  this.fileStatusBars.push(fileStatusBar)
  this.print(fileStatusBar)
}

FileList.prototype.remove = function (fileStatusBar) {
  this.fileStatusBars = this.fileStatusBars = this.fileStatusBars.filter(bar => {
    if (bar !== fileStatusBar) {
      return bar
    }
  })

  this.mainElement.querySelector(`[data-id='${fileStatusBar.id}']`).remove()
}

// it clears only files, not fileStatusBar elements
FileList.prototype.clearOnlyFiles = function () {
  this.fileStatusBars = []
}

FileList.prototype.print = function (fileStatusBar) {
  this.mainElement.appendChild(fileStatusBar.mainElement)
}