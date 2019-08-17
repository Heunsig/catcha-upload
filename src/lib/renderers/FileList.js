// import ProgressBar from '../renderers/ProgressBar'
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

  // const id = uniqueID()
  // const newFileObj = {
  //   id: id,
  //   file: newFile,
  //   // progressBar: new ProgressBar(newFile, id)
  // }


  // this.files.push(newFileObj)
  // this.print(newFileObj)

  console.log('FileList', this)
}

FileList.prototype.remove = function (fileStatusBar) {
  this.fileStatusBars = this.fileStatusBars = this.fileStatusBars.filter(bar => {
    if (bar !== fileStatusBar) {
      return bar
    }
  })

  this.mainElement.querySelector(`[data-id='${fileStatusBar.id}']`).remove()
  // this.files = this.files.filter(fileObj => {
  //   if (fileObj !==) {
  //     return fileObj
  //   }
  // })


  // this.files = this.files.filter((fileObj) => {
  //   if (fileObj !== newFileObj) {
  //     return fileObj
  //   }
  // })

  // this.print()
}

FileList.prototype.print = function (fileStatusBar) {
  this.mainElement.appendChild(fileStatusBar.mainElement)
  // this.element.appendChild(new FileStatusBar(newFileObj.file).component)
  // this.element.appendChild((new ProgressBar(newFileObj, this.element)).elements.section)
  // this.element.appendChild(newFileObj.progressBar.elements.section)
}


// export default function FileListSection () {
//   this.element = document.createElement('div')
//   setAttrs.call(this)
// }

// function setAttrs () {
//   this.element.classList.add('cau-file-list')
// }