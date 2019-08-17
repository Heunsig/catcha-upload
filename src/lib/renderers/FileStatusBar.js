import fileIcon from '../images/file_icon.png'
import { readFile, isImage } from '../helpers/file'

export default function FileStatusBar (id, file, parentComponent) {
  this.id = id
  this.mainElement = document.createElement('div')
  this.childElements = {}
  this.parentComponent = parentComponent
  this.file = file

  setAttrs.call(this)

  this.appendChild('preview', createPreview(this.file))
  this.appendChild('progressBar', createProgressBar())
  this.appendChild('deleteButton', createDeleteButton())

  attachEventsToDeleteButton.call(this)

  // console.log(this)
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

    // console.log(this.parentComponent)
  })
}

FileStatusBar.prototype.appendChild = function (name, childComponent) {
  this.mainElement.appendChild(childComponent)
  this.childElements = {...this.childElements, ...{ [name]: childComponent }}
}