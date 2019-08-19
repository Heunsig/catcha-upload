import CatchaUpload from '../catchaUpload'

import FileStatus from './FileStatus'

import Validate from '../validate'

import { uploadFiles } from '../upload/uploadFiles'

function Renderer () {
  this.target = CatchaUpload.target
  this.fileName = CatchaUpload.fileName

}

Renderer.prototype.render = function (target) {
  target.innerHTML = `
    <div class="cau-wrapper">
      <form class="cau-form">
        <input type="file" id="${this.fileName}" name="${this.fileName}" class="cau-input-file" multiple/>
        <div class="cau-form-msg">
          <span>Drag your files here or click in this area.</span>
        </div>
        <button type="submit" class="cau-submit">Upload</button>
      </form>
    </div>
  `
}

Renderer.prototype.init = function (target) {
  this.render(target)
  const wrapper = target.querySelector('.cau-wrapper')
  const inputFile = target.querySelector('.cau-input-file')
  const form = target.querySelector('.cau-form')

  wrapper.appendChild(FileStatus.render())

  inputFile.addEventListener('change', function (e) {
    e.preventDefault()

    let files = this.files
    for (let file of files) {
      const validate = new Validate(file, FileStatus.filesUploaded + FileStatus.filesReady)

      if (validate.isValidated()) {
        FileStatus.addFileReady(file)
      } else {
        FileStatus.addFileDeclined(file, validate.getErrors())
      }
    }

    FileStatus.changeFilesCounter()
    this.value = ''
  })


  form.addEventListener('submit', (e) => {
    e.preventDefault()

    uploadFiles()

    FileStatus.clearFilesReady()
    FileStatus.changeFilesCounter()
    console.log('dd', FileStatus)
  })
}


const renderer = new Renderer()
export default renderer