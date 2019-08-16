// import options from './stores/index'
import wording from '../stores/wording'
// import { updateMsgAndSubmit } from './helpers/renderer'
import Form from '../renderers/Form'
import InputFile from '../renderers/InputFile'
import Submit from '../renderers/Submit'
import Message from '../renderers/Message'
import { uploadFiles } from '../upload/uploadFiles'

// export const createInfoMsg = (element, filesLength) => {
//   const a = element.querySelector('p')
//   if (a) {
//     console.log('hihi')
//     a.remove()
//   }

//   // const msg = document.createElement('p')
//   // msg.classList.add('cau-msg')

//   // if (filesLength) {
//   //   msg.innerText = wording.fileCounter(filesLength) 
//   // } else {
//   //   msg.innerText = wording.guidance() 
//   // }

//   element.appendChild(msg)

// }

// export const createSubmitBtn = (element, filesLength) => {
//   const a = element.querySelector('button')
//   if (a) {
//     a.remove()
//   }

//   const submit = document.createElement('button')

//   // submit.setAttribute('type', 'submit')
//   // submit.classList.add('cau-submit')
//   // submit.innerText = 'Upload'

//   // if (!filesLength) {
//   //   submit.setAttribute('disabled', 'disabled')
//   //   submit.classList.add('cau-disabled')
//   // }

//   element.appendChild(submit)
// }

// export const updateMsgAndSubmit = (element, filesLength) => {
//   // createInfoMsg(element, filesLength)
//   // createSubmitBtn(element, filesLength)
// }

export default function () {
  const target = this.target
  const fileName = this.fileName

  target.classList.add('cau-wrapper')

  // const eleForm = document.createElement('form')
  // const eleForm = (new Form()).element
  // const eleInputFile = (new InputFile(fileName)).element
  // const submit = new Submit()
  // const eleSubmit = submit.element
  // const message = new Message()
  // const eleMessage = message.element
  // message.showGuidance()

  const form = new Form()
  const message = new Message()
  const submit = new Submit()
  const inputFile = new InputFile(fileName)
  
  

  // const eleInputFile = document.createElement('input')
  // eleForm.classList.add('cau-form')
  // eleInputFile.setAttribute('id', fileName)
  // eleInputFile.setAttribute('type', 'file')
  // eleInputFile.setAttribute('multiple', 'multiple')
  // eleInputFile.setAttribute('name', fileName)
  // eleInputFile.classList.add('cau-input-file')


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
  // console.log(form

  // eleForm.appendChild(eleInputFile)
  // eleForm.appendChild(eleSubmit)
  // eleForm.appendChild(eleMessage)
  // updateMsgAndSubmit(eleForm, eleInputFile.files.length)

  // eleInputFile.addEventListener('change', function () {
  //   updateMsgAndSubmit(eleForm, this.files.length)
  // })

  // return { eleForm, eleInputFile }
}