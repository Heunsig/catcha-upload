import CatchaUpload from '../catchaUpload'
import ErrorObj from './error'

import maximumFileSize from './validators/maximumFileSize'
import minimumFileSize from './validators/minimumFileSize'
import maximumFileNumber from './validators/maximumFileNumber'

export default function Validate (file, totalFilesNum) {
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
  maximumFileSize(file, this.errors)
  minimumFileSize(file, this.errors)
  maximumFileNumber(totalFilesNum, this.errors)
}