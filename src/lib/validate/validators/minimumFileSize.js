import ErrorObj from '../error'

export default (minimumFileSize, file, errors) => {
  if (file.size < minimumFileSize) {
    errors.push(new ErrorObj('Less minimum file size.'))
  }
}