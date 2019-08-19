export default function FileInfo () {
  this.mainElement = document.createElement('div')
  this.fileName = 'test.jpg'
  this.fileSize = '124KB'
}

FileInfo.prototype.render = function () {
  this.mainElement.innerHTML = `
    <div class="cau-file-name">${this.fileName}</div>
    <div class="cau-file-size">${this.fileSize}</div>
  `

  return this.mainElement.innerHTML
}

FileInfo.prototype.test = function () {
  this.fileName = 'bbb.jpg'

  this.render()
}