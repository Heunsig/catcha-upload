export default function Submit () {
  this.element = document.createElement('button')
  setAttrs.call(this)
}

function setAttrs () {
  this.element.setAttribute('type', 'submit')
  this.element.classList.add('cau-submit')
  this.element.innerText = 'Upload'
}


Submit.prototype.enable = function () {
  this.element.removeAttribute('disabled')
  this.element.classList.remove('cau-disabled')
}

Submit.prototype.disable = function () {
  this.element.setAttribute('disabled', 'disabled')
  this.element.classList.add('cau-disabled')
}