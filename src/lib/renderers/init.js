import Form from '../renderers/Form'
import InputFile from '../renderers/InputFile'
import Submit from '../renderers/Submit'
import Message from '../renderers/Message'

import FileList from '../renderers/FileList'
// import ProgressBar from '../renderers/ProgressBar'

// import FileList from '../models/FileList'

// import FileListSection from '../renderers/FileListSection'
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
  // const fileListSection = new FileListSection()
  
  target.appendChild(form.element)
  target.appendChild(fileList.mainElement)
  // target.appendChild(this.fileList.component)
  // target.appendChild(fileListSection.element)

  form.append(inputFile)
  form.append(submit)
  form.append(message)
  // form.append(fileList)

  inputFile.onChange((e, input) => {
    for (let file of input.files) {
      fileList.add(file)
    }

    // this.fileList.clearFiles()

    // this.fileList.
    // if (input.files.length > 0) {
    //   message.showFileCounter(input.files.length)
    //   submit.enable()
    // } else {
    //   message.showGuidance()
    //   submit.disable()
    // }
  })

  form.onSubmit(e => {
    e.preventDefault()

    // uploadFiles.call(this, inputFile.element.files)
    // inputFile.clearFiles()

  })

  // this.elements.form = form.element
  // this.elements.inputFile = inputFile.element
  // this.elements.submitBtn = submit.element
  // this.elements.message = message.element
  // this.elements.fileListSection = fileListSection.element
}