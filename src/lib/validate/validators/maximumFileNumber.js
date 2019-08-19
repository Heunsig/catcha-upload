import CatchaUpload from '../../catchaUpload'
import ErrorObj from '../error'

export default (totalFilesNum, errors) => {
  // let filesNumber = totalFilesNum.length + totalFilesNum.length
  if (CatchaUpload.maximumFileNumber) {
    if (totalFilesNum >= CatchaUpload.maximumFileNumber) {
      errors.push(new ErrorObj('Overflow.'))
    } 
  }
}