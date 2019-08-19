export default function FileProgressBox () {
  this.mainElement = document.createElement('div')
}

FileProgressBox.prototype.render = function () {
  this.mainElement.innerHTML = `
    <div class="cau-file-progressbar-menu">
      <button type="button" class="cau-file-progressbar-remove-btn">remove</button>
    </div>
    <div class="cau-file-progressbar-percentage">ready</div>
  `


  return this.mainElement.innerHTML
}