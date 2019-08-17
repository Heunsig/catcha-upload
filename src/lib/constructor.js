// import FileList from './models/FileList'
// import FileListSection from './renderers/FileListSection'

export default function (element, opts) {
  this.target = element ? element : null 
  // this.elements = {
  //   form: '',
  //   inputFile: '',
  //   submitBtn: '',
  //   message: '',
  //   // fileListSection: ''
  // }

  this.url = 'http://localhost'
  this.fileName = 'media'
  this.maximumFileSize = 5000000
  this.minimumFileSize = 0
  // this.fileList = new FileList(new FileListSection())

  Object.assign(this, opts)
}