// import { uploadFiles } from '../upload/uploadFiles'

export default function Form (callback) {
  this.element = document.createElement('form')
  this.innerForm = []

  setAttrs.call(this)
  // attachEvent.call(this)
}

function setAttrs () {
  this.element.classList.add('cau-form')
}

function attachEvent () {
  // this.element.addEventListener('submit', e => {
  //   e.preventDefault()
  //   console.log(this)
  //   // uploadFiles.call(this, )
  // })
}

Form.prototype.append = function (childElement) {
  this.element.appendChild(childElement.element)
  this.innerForm.push(childElement)
}

Form.prototype.onSubmit = function (callback) {
  this.element.addEventListener('submit', e => {
    callback(e)
  })
}