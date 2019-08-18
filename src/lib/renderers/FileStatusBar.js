import fileIcon from '../images/file_icon.png'
import { readFile, isImage } from '../helpers/file'
import { uniqueID } from '../helpers/string'

export default function FileStatusBar (file, parentComponent, errors) {
  this.id = uniqueID()
  this.mainElement = document.createElement('div')
  this.childElements = {}
  this.parentComponent = parentComponent
  this.file = file
  this.errors = []

  this.errors = [ ...this.errors, ...errors ]

  // this.error = {
  //   isError: false,
  //   errors: []
  // }

  // if (errors) {
  //   this.error.isError = true
  //   this.error.errors = errors
  // }
}

function setAttrs () {
  this.mainElement.classList.add('cau-progress')
  this.mainElement.dataset.id = this.id
}

function createPreview (file) {
  const preview = document.createElement('div')
  preview.classList.add('cau-preview')

  preview.style.backgroundImage = `url("${fileIcon}")`

  readFile(file).then(res => {
    if (isImage(res)) {
      preview.style.backgroundImage = `url("${res}")`
    }
  })

  return preview
}

function createProgressBar () {
  const progressBar = document.createElement('div')
  progressBar.classList.add('cau-progress-bar')
  progressBar.classList.add

  const progress = document.createElement('div')
  progress.classList.add('cau-bar')
  progress.innerText = '0%'

  progressBar.appendChild(progress)

  return progressBar
}

function createErrorMsg (main) {
  const errorMsg = document.createElement('div')
  errorMsg.innerText = main.errors[0].msg

  return errorMsg
}

function createDeleteButton () {
  const deleteButton = document.createElement('button')
  deleteButton.classList.add('cau-progress-delete')
  deleteButton.setAttribute('type', 'button')
  deleteButton.innerText = 'Remove'

  return deleteButton
}

function attachEventsToDeleteButton () {
  this.childElements.deleteButton.addEventListener('click', (e) => {
    e.preventDefault()

    this.parentComponent.remove(this)
  })
}

function fileReady (main) {
  main.appendChild('preview', createPreview(main.file))
  main.appendChild('progressBar', createProgressBar())
  main.appendChild('deleteButton', createDeleteButton())
}

function fileDeclined (main) {
  main.appendChild('preview', createPreview(main.file))
  main.appendChild('errorMessage', createErrorMsg(main))
  main.appendChild('deleteButton', createDeleteButton())
}

FileStatusBar.prototype.hasErrors = function () {
  return this.errors.length ? true : false
}

FileStatusBar.prototype.render = function () {
  setAttrs.call(this)
  if (this.hasErrors()) {
    fileDeclined(this)
  } else {
    fileReady(this)
  }

  attachEventsToDeleteButton.call(this)

  return this.mainElement
}

FileStatusBar.prototype.appendChild = function (name, childComponent) {
  this.mainElement.appendChild(childComponent)
  this.childElements = {...this.childElements, ...{ [name]: childComponent }}
}

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