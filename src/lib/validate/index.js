import CatchaUpload from '../catchaUpload'
import ErrorObj from './error'

export default function Validate (file) {
  this.errors = []

  beginToValidate.call(this, file)
}


Validate.prototype.isValidated = function (file) {
  return this.errors.length ? false : true
}

Validate.prototype.getErrors = function () {
  return this.errors
}

function beginToValidate (file) {
  checkMaximumFileSize.call(this, file)
  checkMinimunFileSize.call(this, file)
}

function checkMaximumFileSize (file) {
  if (file.size > CatchaUpload.maximumFileSize) {
    this.errors.push(new ErrorObj('Over maximum file size.'))
  }
}

function checkMinimunFileSize (file) {
  if (file.size < CatchaUpload.minimumFileSize) {
    this.errors.push(new ErrorObj('Less minimum file size.'))
  }
}