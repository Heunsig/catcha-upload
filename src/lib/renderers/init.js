import Form from '../renderers/Form'
import InputFile from '../renderers/InputFile'
import Submit from '../renderers/Submit'
import Message from '../renderers/Message'
import { uploadFiles } from '../upload/uploadFiles'

export default function () {
  const target = this.target
  const fileName = this.fileName

  target.classList.add('cau-wrapper')

  const form = new Form()
  const message = new Message()
  const submit = new Submit()
  const inputFile = new InputFile(fileName)
  
  target.appendChild(form.element)
  form.append(inputFile)
  form.append(submit)
  form.append(message)

  inputFile.onChange(function (e, input) {
    if (input.files.length > 0) {
      message.showFileCounter(input.files.length)
      submit.enable()
    } else {
      message.showGuidance()
      submit.disable()
    }
  })

  form.onSubmit(e => {
    e.preventDefault()

    uploadFiles.call(this, inputFile.element.files)
    inputFile.clearFiles()

  })
}