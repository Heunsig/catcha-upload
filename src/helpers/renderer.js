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