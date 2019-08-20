import fileIcon from '../images/file_icon.png'
import { readFile, isImage, humanFileSize } from '../helpers/file'
import { uniqueID } from '../helpers/string'

function FileStatusBar (fileStatus, file) {
  this.element = document.createElement('div')
  this.id = uniqueID()
  this.file = file
  this.fileName = file.name
  this.fileSize = humanFileSize(file.size, true)
  this.errors = []
  this.fileStatus = fileStatus

  this.progressBarElement = null
  this.percentageElement = null

  this.renderLayout()
}

function createPreview (previeElement, file) {
  previeElement.style.backgroundImage = `url("${fileIcon}")`
  readFile(file).then(res => {
    if (isImage(res)) {
      previeElement.style.backgroundImage = `url("${res}")`
    }
  })
}

function attachClickEventToDelBtn (deleteBtnElement, fileStatusBar) {
  deleteBtnElement.addEventListener('click', e => {
    e.preventDefault()

    if (fileStatusBar.hasErrors()) {
      fileStatusBar.fileStatus.removeFile('filesDeclined', fileStatusBar)
    } else {
      fileStatusBar.fileStatus.removeFile('filesReady', fileStatusBar)
    }

    fileStatusBar.fileStatus.element.querySelector(`[data-id='${fileStatusBar.id}']`).remove()
    fileStatusBar.fileStatus.changeFilesCounter()
  })
}

function createErrorList (fileErrorsElement, errors) {
  for (let error of errors) {
    const li = document.createElement('li')
    li.innerText = error.msg
    fileErrorsElement.appendChild(li)  
  }
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
  createPreview(this.element.querySelector('.cau-file-preview'), this.file)
  
}

FileStatusBar.prototype.renderStatusReady = function () {
  const fileProgressBarBox = this.element.querySelector('.cau-file-progressbar-box')
  fileProgressBarBox.innerHTML = `
    <div class="cau-file-progressbar-menu">
      <button type="button" class="cau-file-progressbar-remove-btn">Remove</button>
    </div>
    <div class="cau-file-progressbar-percentage">ready</div>
  `

  attachClickEventToDelBtn(this.element.querySelector('.cau-file-progressbar-remove-btn'), this)

  return this.element
}

FileStatusBar.prototype.renderStatusDeclined = function () {
  const fileProgressBarBox = this.element.querySelector('.cau-file-progressbar-box')
  const fileErrors = document.createElement('ul')
  fileErrors.classList.add('cau-file-error')
  createErrorList(fileErrors, this.errors)

  fileProgressBarBox.appendChild(fileErrors)

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