import ErrorObj from '../error'

export default (maximumFileNumber, totalFilesNum, errors) => {
  if (maximumFileNumber) {
    if (totalFilesNum >= maximumFileNumber) {

      errors.push(new ErrorObj('Overflow.'))
    } 
  }
}