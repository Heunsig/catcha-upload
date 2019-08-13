import options from './store/index'

export default () => {
  const form = document.createElement('form')
  const inpFile = document.createElement('input')
  const submit = document.createElement('button')
  const msg = document.createElement('p')
  inpFile.setAttribute('id', options.name)
  inpFile.setAttribute('type', 'file')
  inpFile.setAttribute('multiple', 'multiple')
  inpFile.setAttribute('name', options.name)
  submit.setAttribute('type', 'submit')
  submit.innerText = 'Upload'
  msg.innerText = 'Drag your files here or click in this area.'

  options.target.classList.add('cau-wrapper')
  form.classList.add('cau-form')
  msg.classList.add('cau-msg')
  inpFile.classList.add('cau-input-file')
  submit.classList.add('cau-submit')

  options.target.appendChild(form)
  form.appendChild(inpFile)
  form.appendChild(msg)
  form.appendChild(submit)

  inpFile.addEventListener('change', function () {
    msg.innerText = `${this.files.length} file(s) selected`
  })

  return { form, msg, inpFile, submit }
}