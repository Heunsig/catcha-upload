import fileIcon from '../../../images/file_icon.png'
import { readFile, isImage } from '../../../helpers/file'

export default function Preview () {
  this.mainElement = document.createElement('div')
}

function setAttrs () {
  this.mainElement.classList.add('cau-file-preview')
}

Preview.prototype.render = function () {
  setAttrs.call(this)
  return this.mainElement.innerHTML
}

Preview.prototype.setBackground = function (file) {
  this.mainElement.style.backgroundImage = `url("${fileIcon}")`

  readFile(file).then(res => {
    if (isImage(res)) {
      this.mainElement.style.backgroundImage = `url("${res}")`
    }
  })
}