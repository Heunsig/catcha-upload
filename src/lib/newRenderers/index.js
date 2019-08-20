// import CatchaUpload from '../catchaUpload'

import FileStatus from './FileStatus'
import Validate from '../validate'

import Upload from '../upload/uploadFiles'

function Renderer (catchaUpload) {
  // this.target = CatchaUpload.target
  // this.fileName = CatchaUpload.fileName
  this.catchaUpload = catchaUpload
  // this.fileStatus = new FileStatus(catchaUpload)
  this.target = catchaUpload.target
  this.fileName = catchaUpload.fileName

}

Renderer.prototype.render = function () {
  this.target.innerHTML = `
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

Renderer.prototype.init = function () {
  this.render()

  const target = this.target
  const wrapper = target.querySelector('.cau-wrapper')
  const inputFile = target.querySelector('.cau-input-file')
  const form = target.querySelector('.cau-form')

  // const fileStatus = new FileStatus()
  const fileStatus = new FileStatus()

  // wrapper.appendChild(FileStatus.render())
  wrapper.appendChild(fileStatus.render())

  inputFile.addEventListener('change', (e) => {
    e.preventDefault()

    let files = inputFile.files
    for (let file of files) {
      const validate = new Validate(this.catchaUpload, file, fileStatus.filesUploaded.length + fileStatus.filesReady.length)

      if (validate.isValidated()) {
        fileStatus.addFileReady(file)
      } else {
        fileStatus.addFileDeclined(file, validate.getErrors())
      }
    }

    fileStatus.changeFilesCounter()
    inputFile.value = ''
    // this.value = ''
  })


  form.addEventListener('submit', (e) => {
    e.preventDefault()

    console.log('hi', fileStatus)
    const upload = new Upload(this.catchaUpload, fileStatus.filesReady)
    upload.upload()
    // uploadFiles(this)

    fileStatus.clearFilesReady()
    fileStatus.changeFilesCounter()
    console.log('dd', fileStatus)
  })
}


// const renderer = new Renderer()
// export default renderer
export default Renderer