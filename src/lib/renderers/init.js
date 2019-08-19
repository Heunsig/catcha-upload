import CatchaUpload from '../catchaUpload'

import Wrapper from '../renderers/Wrapper'
import Form from '../renderers/Form'
import InputFile from '../renderers/InputFile'
import Submit from '../renderers/Submit'
import Message from '../renderers/Message'
import FileList from '../renderers/FileList'
import FileStatusBar from '../renderers/FileStatusBar'

import { uploadFiles } from '../upload/uploadFiles'
import Validate from '../validate/index'

export default function Init () {
  const fileName = CatchaUpload.fileName
  const url = CatchaUpload.url

  const wrapper = new Wrapper(CatchaUpload.target)
  const form = new Form()
  const message = new Message()
  const submit = new Submit()
  const inputFile = new InputFile(fileName)
  const fileList = new FileList()

  wrapper.appendChild(form)
  wrapper.appendChild(fileList)

  form.appendChild(inputFile)
  form.appendChild(submit)
  form.appendChild(message)

  inputFile.onChange((e, input) => {
    for (let file of input.files) {
      const validate = new Validate(file, fileList)
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
  })

  wrapper.render()
}