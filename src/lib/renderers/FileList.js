import FileStatusBar from '../renderers/FileStatusBar'
import { uniqueID } from '../helpers/string'

export default function FileList () {
  this.mainElement = document.createElement('div')
  this.fileStatusBars = []

  setAttrs.call(this)
}

function setAttrs () {
  this.mainElement.classList.add('cau-file-list')
}

FileList.prototype.add = function (newFile) {
  const id = uniqueID()
  const fileStatusBar = new FileStatusBar(id, newFile, this)

  this.fileStatusBars.push(fileStatusBar)
  this.print(fileStatusBar)

  // console.log('FileList', this)
}

FileList.prototype.remove = function (fileStatusBar) {
  this.fileStatusBars = this.fileStatusBars = this.fileStatusBars.filter(bar => {
    if (bar !== fileStatusBar) {
      return bar
    }
  })

  this.mainElement.querySelector(`[data-id='${fileStatusBar.id}']`).remove()
}

FileList.prototype.print = function (fileStatusBar) {
  this.mainElement.appendChild(fileStatusBar.mainElement)
}