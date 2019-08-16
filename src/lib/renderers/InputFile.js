import Message from './Message'

export default function InputFile (fileName) {
  this.element = document.createElement('input')

  setAttrs.call(this, fileName)
  // attachEvents.call(this, message, submit)
}

function setAttrs (fileName) {
  this.element.setAttribute('id', fileName)
  this.element.setAttribute('type', 'file')
  this.element.setAttribute('multiple', 'multiple')
  this.element.setAttribute('name', fileName)
  this.element.classList.add('cau-input-file')
}

// function attachEvents (message, submit) {
//   this.element.addEventListener('change', function () {
//     if (this.files.length > 0) {
//       message.showFileCounter(this.files.length)
//       submit.enable()
//     } else {
//       message.showGuidance()
//       submit.disable()
//     }
//   })
// }

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