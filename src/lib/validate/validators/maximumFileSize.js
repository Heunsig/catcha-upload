import ErrorObj from '../error'

export default (maximumFileSize, file, errors) => {
  if (maximumFileSize) {
    if (file.size > maximumFileSize) {
      errors.push(new ErrorObj('Over maximum file size.')) 
    }
  }
}
