import CatchaUpload from '../catchaUpload'

import Form from '../renderers/Form'
import InputFile from '../renderers/InputFile'
import Submit from '../renderers/Submit'
import Message from '../renderers/Message'
import FileList from '../renderers/FileList'

import { uploadFiles } from '../upload/uploadFiles'

export default function Init () {
  const target = CatchaUpload.target
  const fileName = CatchaUpload.fileName
  const url = CatchaUpload.url

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
    uploadFiles(url, fileName, fileList)
    fileList.clearOnlyFiles()
    // console.log('hi')
  })
}