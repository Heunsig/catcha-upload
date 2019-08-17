import CatchaUpload from '../catchaUpload'

export function isValidated (file) {
  if (file.size > CatchaUpload.maximumFileSize) {
    return false
  }

  return true
}
