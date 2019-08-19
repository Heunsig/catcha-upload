import CatchaUpload from '../catchaUpload'
import FileStatusBar from './FileStatusBar'

function FileStatus () {
  this.element = document.createElement('div')
  this.filesUploaded = []
  this.filesDeclined = []
  this.filesReady = []
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

  const tabMenus = this.element.querySelectorAll('.cau-tab-item')
  const tabs = this.element.querySelectorAll('.cau-tab')

  function test () {
    for (let tab of tabs) {
      console.log(tab)
    }
  }
  // console.log('tabs', tabs[)
  for (let menu of tabMenus) {
    menu.addEventListener('click', (e, i) => {
      let target = e.target
      if (e.target.localName === 'span') {
        target = e.target.parentElement
      }

      e.preventDefault()
      for (let m of tabMenus) {
        m.classList.remove('active')
      }
      tabMenus.forEach(m => {
        m.classList.remove('active')
      })

      target.classList.add('active') 
      tabs.forEach(m => {
        m.classList.remove('active')
      })
      console.log('doo')

      // Need to fix here sometimes it cannot be found tab classList becuase querySelector is slow.
      console.log(target.dataset)
      const tab = this.element.querySelector('.' + target.dataset.tab)  
      tab.classList.add('active')
    })
  }

  return this.element
}


FileStatus.prototype.addFileReady = function (file) {
  const fileStatusBar = new FileStatusBar(file)
  const filesReady = this.element.querySelector('.cau-files-ready')
  this.filesReady.push(fileStatusBar)

  // append theKid to the end of theParent
  // filesReady.appendChild(fileStatusBar.renderStatusReady());

  // // prepend theKid to the beginning of theParent
  // filesReady.insertBefore(fileStatusBar.renderStatusReady(), filesReady.firstChild);
  filesReady.appendChild(fileStatusBar.renderStatusReady())
  
  console.log('filesReady', this.filesReady)
  
}

FileStatus.prototype.addFileDeclined = function (file, errors) {
  const fileStatusBar = new FileStatusBar(file)
  fileStatusBar.addErrors(errors)

  const filesDeclined = this.element.querySelector('.cau-files-declined')
  this.filesDeclined.push(fileStatusBar)

  filesDeclined.appendChild(fileStatusBar.renderStatusDeclined())
  console.log('filesDeclined', this.filesDeclined)
}

FileStatus.prototype.addFileUploaded = function (fileStatusBar) {
  this.filesUploaded.push(fileStatusBar)
  console.log('filesUploaded', this.filesUploaded)
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

const fileStatus = new FileStatus()
export default fileStatus