import FileStatusBar from './FileStatusBar'

function FileStatus (catchaUpload) {
  this.element = document.createElement('div')
  this.filesUploaded = []
  this.filesDeclined = []
  this.filesReady = []
}

function activeTabMenu (element, tabMenus, tabs) {
  for (let menu of tabMenus) {
    menu.addEventListener('click', (e, i) => {
      e.preventDefault()
      let target = e.target.localName === 'span' ? e.target.parentElement : e.target

      for (let m of tabMenus) {
        m.classList.remove('active')
      }

      target.classList.add('active') 

      for (let t of tabs) {
        t.classList.remove('active')
      }

      const tab = element.querySelector('.' + target.dataset.tab)
      tab.classList.add('active')
    })
  }
}

function prependChild (element, child) {
  if (!element.children.length) {
    element.appendChild(child)
  } else {
    element.insertBefore(child, element.firstChild);
  }
}

FileStatus.prototype.render = function () {
  this.element.classList.add('cau-status-section')
  this.element.innerHTML = `
    <div class="cau-tab-menu">
      <a href="#" class="cau-tab-item active" data-tab="cau-files-ready">Ready <span class="cau-files-ready-counter">(0)</span></a>
      <a href="#" class="cau-tab-item cau-color-danger" data-tab="cau-files-declined">Declined <span class="cau-files-declined-counter">(0)</span></a>
    </div>
    <div class="cau-files-ready cau-tab active">
    </div>
    <div class="cau-files-declined cau-tab">
    </div>
  `

  activeTabMenu(
    this.element,
    this.element.querySelectorAll('.cau-tab-item'), 
    this.element.querySelectorAll('.cau-tab')
  )

  return this.element
}

FileStatus.prototype.createFileStatusBar = function (file) {
  return new FileStatusBar(this, file)
}

FileStatus.prototype.addFileReady = function (file) {
  const fileStatusBar = this.createFileStatusBar(file)
  const filesReadyElement = this.element.querySelector('.cau-files-ready')
  this.filesReady.push(fileStatusBar)

  prependChild(filesReadyElement, fileStatusBar.renderStatusReady())
}

FileStatus.prototype.addFileDeclined = function (file, errors) {
  const fileStatusBar = this.createFileStatusBar(file)
  fileStatusBar.addErrors(errors)
  const filesDeclinedElement = this.element.querySelector('.cau-files-declined')
  this.filesDeclined.push(fileStatusBar)

  prependChild(filesDeclinedElement, fileStatusBar.renderStatusDeclined())
}

FileStatus.prototype.addFileUploaded = function (fileStatusBar) {
  this.filesUploaded.push(fileStatusBar)
  // console.log('filesUploaded', this.filesUploaded)
}

FileStatus.prototype.clearFilesReady = function () {
  this.filesReady = []
}

FileStatus.prototype.removeFile = function (fileArray, fileStatusBar) {
  this[fileArray] = this[fileArray].filter(bar => {
    if (bar !== fileStatusBar) {
      return bar
    }
  })  
}

FileStatus.prototype.changeFilesCounter = function () {
  const fileReadyCounter = this.element.querySelector('.cau-files-ready-counter')
  const fileDeclinedCounter = this.element.querySelector('.cau-files-declined-counter')

  fileReadyCounter.innerText = `(${this.filesReady.length})`
  fileDeclinedCounter.innerText = `(${this.filesDeclined.length})`
}

export default FileStatus