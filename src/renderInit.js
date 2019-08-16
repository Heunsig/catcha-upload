// import options from './stores/index'
import wording from './stores/wording'
import { updateMsgAndSubmit } from './helpers/renderer'

export default function () {
  const target = this.target
  const fileName = this.fileName

  const eleForm = document.createElement('form')
  const eleInputFile = document.createElement('input')

  eleForm.classList.add('cau-form')

  eleInputFile.setAttribute('id', fileName)
  eleInputFile.setAttribute('type', 'file')
  eleInputFile.setAttribute('multiple', 'multiple')
  eleInputFile.setAttribute('name', fileName)
  eleInputFile.classList.add('cau-input-file')

  target.classList.add('cau-wrapper')

  target.appendChild(eleForm)
  eleForm.appendChild(eleInputFile)
  updateMsgAndSubmit(eleForm, eleInputFile.files.length)


  eleInputFile.addEventListener('change', function () {
    updateMsgAndSubmit(eleForm, this.files.length)
  })

  return { eleForm, eleInputFile }
}