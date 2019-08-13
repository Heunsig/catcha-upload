import wording from '../stores/wording'

export const createProgressSection = (element) => {
  const section = document.createElement('div')
  const preview = document.createElement('div')
  const progressBox = document.createElement('div')
  const progressBar = document.createElement('div')

  section.classList.add('cau-progress')
  preview.classList.add('cau-preview')
  progressBox.classList.add('cau-progress-bar')
  progressBar.classList.add('cau-bar')

  element.appendChild(section)
  section.appendChild(preview)
  section.appendChild(progressBox)
  progressBox.appendChild(progressBar)
  progressBar.innerText = '0%'

  return { section, preview, progressBox, progressBar }
}

export const createInfoMsg = (element, filesLength) => {
  const a = element.querySelector('p')
  if (a) {
    console.log('hihi')
    a.remove()
  }

  const msg = document.createElement('p')
  msg.classList.add('cau-msg')

  if (filesLength) {
    msg.innerText = wording.fileCounter(filesLength) 
  } else {
    msg.innerText = wording.guidance() 
  }

  element.appendChild(msg)

}

export const createSubmitBtn = (element, filesLength) => {
  const a = element.querySelector('button')
  if (a) {
    a.remove()
  }

  const submit = document.createElement('button')

  submit.setAttribute('type', 'submit')
  submit.classList.add('cau-submit')
  submit.innerText = 'Upload'

  if (!filesLength) {
    submit.setAttribute('disabled', 'disabled')
    submit.classList.add('cau-disabled')
  }

  element.appendChild(submit)
}

export const updateMsgAndSubmit = (element, filesLength) => {
  createInfoMsg(element, filesLength)
  createSubmitBtn(element, filesLength)
}