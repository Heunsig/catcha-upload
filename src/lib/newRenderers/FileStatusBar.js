import FileStatus from './FileStatus'
import fileIcon from '../images/file_icon.png'
import { readFile, isImage, humanFileSize } from '../helpers/file'
import { uniqueID } from '../helpers/string'

function FileStatusBar (file) {
  this.element = document.createElement('div')
  this.id = uniqueID()
  this.file = file
  this.fileName = file.name
  this.fileSize = humanFileSize(file.size, true)
  this.errors = []

  this.progressBarElement = null
  this.percentageElement = null

  this.renderLayout()
}

FileStatusBar.prototype.renderLayout = function () {
  this.element.classList.add('cau-file-status-bar')
  this.element.dataset.id = this.id
  this.element.innerHTML = `
    <div class="cau-file-preview"></div>
    <div class="cau-file-status">
      <div class="cau-file-info">
        <div class="cau-file-name">${ this.fileName }</div>
        <div class="cau-file-size">${ this.fileSize }</div>
      </div>
      <div class="cau-file-progressbar-box">
      </div>
    </div>
  `

  const preview =  this.element.querySelector('.cau-file-preview')
  preview.style.backgroundImage = `url("${fileIcon}")`
  readFile(this.file).then(res => {
    if (isImage(res)) {
      preview.style.backgroundImage = `url("${res}")`
    }
  })
}

FileStatusBar.prototype.renderStatusReady = function () {
  const fileProgressBarBox = this.element.querySelector('.cau-file-progressbar-box')
  fileProgressBarBox.innerHTML = `
    <div class="cau-file-progressbar-menu">
      <button type="button" class="cau-file-progressbar-remove-btn">remove</button>
    </div>
    <div class="cau-file-progressbar-percentage">ready</div>
  `

  const deleteBtn = this.element.querySelector('.cau-file-progressbar-remove-btn')
  deleteBtn.addEventListener('click', e => {
    e.preventDefault()

    if (this.hasErrors()) {
      FileStatus.removeFile('filesDeclined', this)
    } else {
      FileStatus.removeFile('filesReady', this)
    }

    FileStatus.element.querySelector(`[data-id='${this.id}']`).remove()

    console.log('removed', FileStatus)
  })

  return this.element
}

FileStatusBar.prototype.renderStatusDeclined = function () {
  const fileProgressBarBox = this.element.querySelector('.cau-file-progressbar-box')
  const fileErrors = document.createElement('ul')
  fileErrors.classList.add('cau-file-error')

  for (let error of this.errors) {
    const li = document.createElement('li')
    li.innerText = error.msg
    fileErrors.appendChild(li)  
  }

  fileProgressBarBox.appendChild(fileErrors)

  // fileProgressBarBox.innerHTML = `
  //   <ul class="cau-file-error">
  //     <li>Oversized file</li>
  //     <li>Overflow the maximum file number</li>
  //     <li>Type error</li>
  //   </ul>
  // `

  return this.element
}

FileStatusBar.prototype.renderStatusInProgress = function () {
  const fileProgressBarBox = this.element.querySelector('.cau-file-progressbar-box')
  fileProgressBarBox.innerHTML = `
    <div class="cau-file-progressbar-back">
      <div class="cau-file-progressbar"></div>
    </div>
    <div class="cau-file-progressbar-percentage">0%</div>
  `

  this.progressBarElement = this.element.querySelector('.cau-file-progressbar')
  this.percentageElement = this.element.querySelector('.cau-file-progressbar-percentage')
}

FileStatusBar.prototype.changePercentage = function (percent) {
  this.progressBarElement.style.width = percent + '%'
  this.percentageElement.innerText = percent + '%'
}

FileStatusBar.prototype.complete = function () {
  this.element.classList.add('completed')
  this.progressBarElement.classList.add('completed')
  this.percentageElement.classList.add('completed')
}

FileStatusBar.prototype.addErrors = function (errors) {
  this.errors = [...this.errors, ...errors]
}

FileStatusBar.prototype.hasErrors = function () {
  return this.errors.length ? true : false
}

export default FileStatusBar