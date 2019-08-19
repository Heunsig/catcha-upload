export default function Wrapper (element) {
  this.mainElement = element
  this.childElements = []
}

function setAttrs () {
  this.mainElement.classList.add('cau-wrapper')
}

Wrapper.prototype.render = function () {
  setAttrs.call(this)
  return this.mainElement
}

Wrapper.prototype.appendChild = function (childElement) {
  this.mainElement.appendChild(childElement.render())
  this.childElements.push(childElement)
}