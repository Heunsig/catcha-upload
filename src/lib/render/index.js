import FileStatus from './FileStatus'
import Validate from '../validate'
import Upload from '../upload'
import wording from '../stores/wording'

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
          <span>${wording.beforeDragEnter()}</span>
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
  const form = target.querySelector('.cau-form')
  const inputFile = target.querySelector('.cau-input-file')
  const formMsg = target.querySelector('.cau-form-msg > span')
  const fileStatus = new FileStatus(catchaUpload)

  target.style.width = catchaUpload.style.width
  form.style.height = catchaUpload.style.dropZoneHeight

  wrapper.appendChild(fileStatus.render())

  inputFile.addEventListener('dragenter', (e) => {
      formMsg.innerText = wording.afterDragEnter()
      form.classList.add('dragentered')
  })

  inputFile.addEventListener('dragleave', (e) => {
    formMsg.innerText = wording.beforeDragEnter()
    form.classList.remove('dragentered')
  })

  inputFile.addEventListener('change', (e) => {
    e.preventDefault()

    formMsg.innerText = wording.beforeDragEnter()
    form.classList.remove('dragentered')

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

    if (fileStatus.filesReady.length) {
      const upload = new Upload(catchaUpload, fileStatus.filesReady)

      upload.upload()

      fileStatus.clearFilesReady()
      fileStatus.changeFilesCounter()  
    }
  })
}

export default Renderer

