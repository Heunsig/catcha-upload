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

  console.log(this)
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
    // this.parentComponent.fileStatusBars = this.parentComponent.fileStatusBars.filter(bar => {
    //   if (bar !== this) {
    //     return bar
    //   }
    // })

    // this.parentComponent.mainElement.querySelector(`[data-id='${this.id}']`).remove()

    console.log(this.parentComponent)
  })
}

FileStatusBar.prototype.appendChild = function (name, childComponent) {
  this.mainElement.appendChild(childComponent)
  this.childElements = {...this.childElements, ...{ [name]: childComponent }}
}

// FileStatusBar.prototype.delete = function () {
//    this.elements.deleteButton.dispatchEvent(new Event('click'))
// }

// function createProgressBar () {
//   const elePreview = document,
// }

// export default function ProgressBar (newFileObj, boxElement) {
//   this.id = newFileObj.id
//   this.file = newFileObj.file
//   this.boxElement = boxElement
//   // this.preview = elePreview
//   // this.bar = eleProgressBar

//   const {
//     eleSection, 
//     elePreview, 
//     eleProgressBox, 
//     eleProgressBar, 
//     eleDeleteBtn 
//   } = createProgressSection.call(this)

  
//   this.elements = {
//     section: eleSection,
//     preview: elePreview,
//     progressBox: eleProgressBox,
//     progressBar: eleProgressBar,
//     deleteBtn: eleDeleteBtn
//   }

//   // showPreviewImage(file, this)
//   showPreviewImage.call(this)
// }

// function createProgressSection () {
//   const eleSection = document.createElement('div')
//   const elePreview = document.createElement('div')
//   const eleProgressBox = document.createElement('div')
//   const eleProgressBar = document.createElement('div')
//   const eleDeleteBtn = document.createElement('button')

//   eleSection.classList.add('cau-progress')
//   eleSection.dataset.id = this.id
//   elePreview.classList.add('cau-preview')
//   eleProgressBox.classList.add('cau-progress-bar')
//   eleProgressBar.classList.add('cau-bar')

//   eleDeleteBtn.classList.add('cau-progress-delete')

//   eleDeleteBtn.setAttribute('type', 'button')
//   eleDeleteBtn.innerText = 'Remove'

//   eleSection.appendChild(elePreview)
//   eleSection.appendChild(eleProgressBox)
//   eleSection.appendChild(eleDeleteBtn)
//   eleProgressBox.appendChild(eleProgressBar)
//   eleProgressBar.innerText = '0%'


//   eleDeleteBtn.addEventListener('click', (e) => {
//     this.boxElement.querySelector(`[data-id='${this.id}']`).remove()
//   })

//   // target.appendChild(eleSection)

//   return { 
//     eleSection,
//     elePreview,
//     eleProgressBox,
//     eleProgressBar,
//     eleDeleteBtn
//   }
// }

// function showPreviewImage () {
//   const file = this.file
//   const preview = this.elements.preview

//   preview.style.backgroundImage = `url("${fileIcon}")`

//   readFile(file).then(res => {
//     if (isImage(res)) {
//       preview.style.backgroundImage = `url("${res}")`
//     }
//   })
// }

// ProgressBar.prototype.onClickRemove = function (cb) {
//   // console.log('before')
//   // this.elements.deleteBtn.addEventListener('click', (e) => {
//   //   cb()
//   //   // console.log('hi')
//   //   // this.remove()
//   // })
// }

// ProgressBar.prototype.test = function () {
//   this.boxElement.dispatchEvent(new Event('change'))
// }