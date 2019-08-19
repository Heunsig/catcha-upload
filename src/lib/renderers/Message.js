import wording from '../stores/wording'

export default function Message () {
  this.mainElement = document.createElement('p')
}

function setAttrs () {
  this.mainElement.classList.add('cau-form-msg')
}

Message.prototype.render = function () {
  this.showGuidance()
  setAttrs.call(this)
  return this.mainElement
}

Message.prototype.showFileCounter = function (filesLength) {
  this.mainElement.innerText = wording.fileCounter(filesLength)
}

Message.prototype.showGuidance = function () {
  this.mainElement.innerText = wording.guidance()
}