import wording from '../stores/wording'

export default function Message () {
  this.element = document.createElement('p')
  setAttrs.call(this)
  this.showGuidance()
}

function setAttrs () {
  this.element.classList.add('cau-msg')
}

Message.prototype.showFileCounter = function (filesLength) {
  this.element.innerText = wording.fileCounter(filesLength)
}

Message.prototype.showGuidance = function () {
  this.element.innerText = wording.guidance()
}