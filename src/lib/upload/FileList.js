export default function FileList (target, parentNode) {
  this.target = target
  this.parentNode = parentNode
  this.files = []
}

FileList.prototype.add = function (newProgressBar) {
  this.files.push(newProgressBar)
  console.log('add', this.files)
  this.print()
}

FileList.prototype.remove = function (newProgressBar) {
  this.files = this.files.filter((file) => {
    if (file !== newProgressBar) {
      return file
    }
  })

  this.print()
}

FileList.prototype.print = function () {
  this.parentNode.innerHTML = ''
  for (let file of this.files) {
    this.parentNode.appendChild(file.elements.section)
  }
}