import ErrorObj from '../error'

export default (maximumFileSize, file, errors) => {
  if (file.size > maximumFileSize) {
    errors.push(new ErrorObj('Over maximum file size.')) 
  }
}
