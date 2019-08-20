import ErrorObj from './error'

import maximumFileSize from './validators/maximumFileSize'
import minimumFileSize from './validators/minimumFileSize'
import maximumFileNumber from './validators/maximumFileNumber'

export default function Validate (catchaUpload, file, totalFilesNum) {
  this.catchaUpload = catchaUpload
  this.errors = []

  if (file) {
    this.validate(file, totalFilesNum)
  }
}


Validate.prototype.isValidated = function (file) {
  return this.errors.length ? false : true
}

Validate.prototype.getErrors = function () {
  return this.errors
}

Validate.prototype.validate = function (file, totalFilesNum) {
  maximumFileSize(this.catchaUpload.maximumFileSize, file, this.errors)
  minimumFileSize(this.catchaUpload.minimumFileSize, file, this.errors)
  maximumFileNumber(this.catchaUpload.maximumFileNumber, totalFilesNum, this.errors)
}