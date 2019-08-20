import FileStatus from './FileStatus'
import Validate from '../validate'
import Upload from '../upload'

function Renderer (catchaUpload) {
  this.catchaUpload = catchaUpload
  this.target = catchaUpload.target
  this.inputFileName = catchaUpload.inputFileName
}

Renderer.prototype.render = function () {
  this.target.innerHTML = `
    <div class="cau-wrapper">
      <form class="cau-form">
        <input type="file" id="${this.inputFileName}" name="${this.inputFileName}" class="cau-input-file" multiple/>
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
  const catchaUpload = this.catchaUpload

  const target = this.target
  const wrapper = target.querySelector('.cau-wrapper')
  const inputFile = target.querySelector('.cau-input-file')
  const form = target.querySelector('.cau-form')
  const fileStatus = new FileStatus(catchaUpload)
  wrapper.appendChild(fileStatus.render())

  inputFile.addEventListener('change', (e) => {
    e.preventDefault()

    let files = inputFile.files

    for (let file of files) {
      const validate = new Validate(catchaUpload, file, fileStatus.filesUploaded.length + fileStatus.filesReady.length)

      if (validate.isValidated()) {
        fileStatus.addFileReady(file)
      } else {
        fileStatus.addFileDeclined(file, validate.getErrors())
      }
    }

    fileStatus.changeFilesCounter()
    inputFile.value = ''
  })


  form.addEventListener('submit', (e) => {
    e.preventDefault()

    const upload = new Upload(catchaUpload, fileStatus.filesReady)
    upload.upload()

    fileStatus.clearFilesReady()
    fileStatus.changeFilesCounter()
  })
}

export default Renderer