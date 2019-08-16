import fileIcon from '../images/file_icon.png'
import { readFile, isImage } from '../helpers/file'

export default function (target, file) {
  const {elePreview, eleProgressBar} = createProgressSection(target)
  this.preview = elePreview
  this.bar = eleProgressBar

  showPreviewImage(file, this)
}

function createProgressSection (target) {
  const eleSection = document.createElement('div')
  const elePreview = document.createElement('div')
  const eleProgressBox = document.createElement('div')
  const eleProgressBar = document.createElement('div')

  eleSection.classList.add('cau-progress')
  elePreview.classList.add('cau-preview')
  eleProgressBox.classList.add('cau-progress-bar')
  eleProgressBar.classList.add('cau-bar')


  eleSection.appendChild(elePreview)
  eleSection.appendChild(eleProgressBox)
  eleProgressBox.appendChild(eleProgressBar)
  eleProgressBar.innerText = '0%'

  target.appendChild(eleSection)

  return { 
    eleSection,
    elePreview,
    eleProgressBox,
    eleProgressBar
  }
}

const showPreviewImage = (file, progressBar) => {
  progressBar.preview.style.backgroundImage = `url("${fileIcon}")`

  readFile(file).then(res => {
    if (isImage(res)) {
      progressBar.preview.style.backgroundImage = `url("${res}")`
    }
  })
}