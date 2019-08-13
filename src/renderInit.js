import options from './stores/index'
import wording from './stores/wording'
import { updateMsgAndSubmit } from './helpers/renderer'
// import fileModel from './models/file'

export default () => {
  const form = document.createElement('form')
  const inpFile = document.createElement('input')

  form.classList.add('cau-form')

  inpFile.setAttribute('id', options.name)
  inpFile.setAttribute('type', 'file')
  inpFile.setAttribute('multiple', 'multiple')
  inpFile.setAttribute('name', options.name)
  inpFile.classList.add('cau-input-file')

  options.target.classList.add('cau-wrapper')

  options.target.appendChild(form)
  form.appendChild(inpFile)
  updateMsgAndSubmit(form, inpFile.files.length)


  inpFile.addEventListener('change', function () {
    updateMsgAndSubmit(form, this.files.length)
  })

  return { form, inpFile }
}