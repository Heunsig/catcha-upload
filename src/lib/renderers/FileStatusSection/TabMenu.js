export default function TabMenu () {
  this.mainElement = document.createElement('div')
  // this.tabItemFilesReadyElement = document.createElement('a')
  // this.tabItemFilesDeclinedElement = document.createElement('a')
}

function setAttrs () {
  this.mainElement.classList.add('cau-tab-menu')

  // this.tabItemFilesReadyElement.innerText = 'Ready (0)'
  // this.tabItemFilesDeclinedElement.innerText = 'Declined (0)'
  // this.tabItemFilesReadyElement.classList.add('cau-tab-item', 'active')
  // this.tabItemFilesDeclinedElement.classList.add('cau-tab-item', 'cau-color-danger')
}

TabMenu.prototype.render = function () {
  setAttrs.call(this)

  this.mainElement.innerHTML = `
    <div class="cau-tab-item active">Ready (0)</div>
    <div class="cau-tab-item cau-color-danter">Declined (0)</div>
  `
  // this.mainElement.appendChild(this.tabItemFilesReadyElement)
  // this.mainElement.appendChild(this.tabItemFilesDeclinedElement)

  return this.mainElement
}

// TabMenu.prototype.changeCounterOfFilesReady = function (num) {
//   this.tabItemFilesReadyElement.innerText = `${this.tabItemFilesReadyElement.innerText} (${num})`
// }

// TabMenu.prototype.changeCounterOfFilesDeclined = function (num) {
//   this.tabItemFilesDeclinedElement.innerText = `${this.tabItemFilesDeclinedElement.innerText} (${num})`
// }