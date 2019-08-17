// import ProgressBar from '../renderers/ProgressBar'
import FileStatusBar from '../renderers/FileStatusBar'
import { uniqueID } from '../helpers/string'

export default function FileList (section) {
  this.component = section.element
  this.fileStatusBars = []
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

FileList.prototype.remove = function (newFile) {
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
  this.component.appendChild(fileStatusBar.component)
  // this.element.appendChild(new FileStatusBar(newFileObj.file).component)
  // this.element.appendChild((new ProgressBar(newFileObj, this.element)).elements.section)
  // this.element.appendChild(newFileObj.progressBar.elements.section)
}