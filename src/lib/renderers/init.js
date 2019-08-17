import Form from '../renderers/Form'
import InputFile from '../renderers/InputFile'
import Submit from '../renderers/Submit'
import Message from '../renderers/Message'
import FileList from '../renderers/FileList'

import { uploadFiles } from '../upload/uploadFiles'

export default function Init () {
  const target = this.target
  const fileName = this.fileName

  target.classList.add('cau-wrapper')

  const form = new Form()
  const message = new Message()
  const submit = new Submit()
  const inputFile = new InputFile(fileName)
  const fileList = new FileList()
  
  target.appendChild(form.element)
  target.appendChild(fileList.mainElement)

  form.append(inputFile)
  form.append(submit)
  form.append(message)

  inputFile.onChange((e, input) => {
    for (let file of input.files) {
      fileList.add(file)
    }
  })

  form.onSubmit(e => {
    e.preventDefault()

    // uploadFiles.call(this, inputFile.element.files)
  })
}