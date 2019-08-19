import fileIcon from '../../../images/file_icon.png'
import { readFile, isImage } from '../../../helpers/file'
import { uniqueID } from '../../../helpers/string'

import Preview from './Preview'
import FileInfo from './FileInfo'
import FileProgressBarBox from './FileProgressBox'

export default function FileStatusBar (file, parentComponent, errors) {
  this.mainElement = document.createElement('div')

  // this.id = uniqueID()
  // this.mainElement = document.createElement('div')
  // this.childElements = {}
  // this.parentComponent = parentComponent
  // this.file = file
  // this.errors = []

  // this.errors = [ ...this.errors, ...errors ]
}

function setAttrs () {
  this.mainElement.classList.add('cau-file-status-bar')
}

FileStatusBar.prototype.hasErrors = function () {
  return this.errors.length ? true : false
}

FileStatusBar.prototype.render = function () {
  const preview = new Preview()
  const fileInfo = new FileInfo()
  const progressBarBox = new FileProgressBarBox()

  this.mainElement.innerHTML = `
    ${ preview.render() }
    <div class="cau-file-status">
      ${ fileInfo.render() }
      ${ progressBarBox.render() }
    </div>
  `

  fileInfo.test()

  return this.mainElement
}

// FileStatusBar.prototype.appendChild = function (name, childComponent) {
//   this.mainElement.appendChild(childComponent)
//   this.childElements = {...this.childElements, ...{ [name]: childComponent }}
// }



FileStatusBar.prototype.progressingBar = function (percent) {
  this.childElements.progressBar.firstChild.style.width = percent + '%'
  this.childElements.progressBar.firstChild.innerText = percent + '%'
}

FileStatusBar.prototype.completedBar = function () {
  this.childElements.progressBar.firstChild.style.backgroundColor = 'green'
  this.childElements.deleteButton.setAttribute('disabled', 'disabled')
  this.childElements.deleteButton.style.color = 'green'
  this.childElements.deleteButton.innerText = 'Clear'
}