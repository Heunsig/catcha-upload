import CatchaUpload from '../catchaUpload'

import Form from '../renderers/Form'
import InputFile from '../renderers/InputFile'
import Submit from '../renderers/Submit'
import Message from '../renderers/Message'
import FileList from '../renderers/FileList'
import FileStatusBar from '../renderers/FileStatusBar'

import { uploadFiles } from '../upload/uploadFiles'
import Validate from '../validate/index'

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
  
  target.appendChild(form.render())
  target.appendChild(fileList.render())

  form.append(inputFile)
  form.append(submit)
  form.append(message)

  inputFile.onChange((e, input) => {
    for (let file of input.files) {
      const validate = new Validate(file)
      const fileStatusBar = new FileStatusBar(file, fileList, validate.getErrors())
      
      if (validate.isValidated()) {
        fileList.addFileReady(fileStatusBar)
      } else {
        fileList.addFileDeclined(fileStatusBar)
      }
    }

    inputFile.clearFiles()

    console.log('change input', fileList)
  })

  form.onSubmit(e => {
    e.preventDefault()
    uploadFiles(url, fileName, fileList)
    fileList.clearOnlyFiles()
    console.log('uploaded', fileList)
    // console.log('hi')
  })
}