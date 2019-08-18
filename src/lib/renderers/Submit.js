export default function Submit () {
  this.mainElement = document.createElement('button')
}

function setAttrs () {
  this.mainElement.setAttribute('type', 'submit')
  this.mainElement.classList.add('cau-submit')
  this.mainElement.innerText = 'Upload'
}

Submit.prototype.render = function () {
  setAttrs.call(this)
  return this.mainElement
}


Submit.prototype.enable = function () {
  this.mainElement.removeAttribute('disabled')
  this.mainElement.classList.remove('cau-disabled')
}

Submit.prototype.disable = function () {
  this.mainElement.setAttribute('disabled', 'disabled')
  this.mainElement.classList.add('cau-disabled')
}