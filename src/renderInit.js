import options from './stores/index'
import wording from './stores/wording'

export default () => {
  const form = document.createElement('form')
  const inpFile = document.createElement('input')
  const submit = document.createElement('button')
  const msg = document.createElement('p')

  form.classList.add('cau-form')

  inpFile.setAttribute('id', options.name)
  inpFile.setAttribute('type', 'file')
  inpFile.setAttribute('multiple', 'multiple')
  inpFile.setAttribute('name', options.name)
  inpFile.classList.add('cau-input-file')

  submit.setAttribute('type', 'submit')
  // submit.setAttribute('disabled', 'disabled')
  submit.classList.add('cau-submit')
  submit.classList.add('cau-disabled')
  submit.innerText = 'Upload'

  msg.classList.add('cau-msg')
  msg.innerText = wording.guidance()

  options.target.classList.add('cau-wrapper')

  options.target.appendChild(form)
  form.appendChild(inpFile)
  form.appendChild(msg)
  form.appendChild(submit)

  inpFile.addEventListener('change', function () {
    msg.innerText = wording.fileCounter(this.files.length)
  })

  return { form, msg, inpFile, submit }
}