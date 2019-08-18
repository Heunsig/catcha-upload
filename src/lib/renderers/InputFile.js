import Message from './Message'

export default function InputFile (fileName) {
  this.fileName = fileName
  this.mainElement = document.createElement('input')
}

function setAttrs () {
  this.mainElement.setAttribute('id', this.fileName)
  this.mainElement.setAttribute('type', 'file')
  this.mainElement.setAttribute('multiple', 'multiple')
  this.mainElement.setAttribute('name', this.fileName)
  this.mainElement.classList.add('cau-input-file')
}

InputFile.prototype.render = function () {
  setAttrs.call(this)
  return this.mainElement
}

InputFile.prototype.onChange = function (cb) {
  this.mainElement.addEventListener('change', function (e) {
    cb(e, this)
  })
}

InputFile.prototype.clearFiles = function () {
  this.mainElement.value = ''
  // this.trigger('change')
}

InputFile.prototype.trigger = function (event) {
  const trigger = {
    change: () => {
      this.mainElement.dispatchEvent(new Event('change'))
    }
  }

  trigger[event]()
}