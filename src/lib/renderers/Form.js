export default function Form (callback) {
  this.mainElement = document.createElement('form')
  this.childElements = []
}

function setAttrs () {
  this.mainElement.classList.add('cau-form')
}

Form.prototype.render = function () {
  setAttrs.call(this)
  return this.mainElement
}

Form.prototype.append = function (childElement) {
  this.mainElement.appendChild(childElement.render())
  this.childElements.push(childElement)
}

Form.prototype.onSubmit = function (callback) {
  this.mainElement.addEventListener('submit', e => {
    callback(e)
  })
}