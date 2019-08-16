import Message from './Message'

export default function InputFile (fileName) {
  this.element = document.createElement('input')

  setAttrs.call(this, fileName)
}

function setAttrs (fileName) {
  this.element.setAttribute('id', fileName)
  this.element.setAttribute('type', 'file')
  this.element.setAttribute('multiple', 'multiple')
  this.element.setAttribute('name', fileName)
  this.element.classList.add('cau-input-file')
}

InputFile.prototype.onChange = function (cb) {
  this.element.addEventListener('change', function (e) {
    cb(e, this)
  })
}

InputFile.prototype.clearFiles = function () {
  this.element.value = ''
  this.trigger('change')
}

InputFile.prototype.trigger = function (event) {
  const trigger = {
    change: () => {
      this.element.dispatchEvent(new Event('change'))
    }
  }

  trigger[event]()
}