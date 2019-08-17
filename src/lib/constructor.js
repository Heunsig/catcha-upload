export default function Constructor (element, opts) {
  this.target = element ? element : null 
  this.url = 'http://localhost'
  this.fileName = 'media'
  this.maximumFileSize = 5000000
  this.minimumFileSize = 0

  Object.assign(this, opts)
}

// Constructor.prototype.setting = function (element, opts) {
//   this.target = element ? element:null
//   Object.assign(this, opts)
// }