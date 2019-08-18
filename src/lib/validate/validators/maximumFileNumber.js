import CatchaUpload from '../../catchaUpload'
import ErrorObj from '../error'

export default (fileList, errors) => {
  let filesNumber = fileList.filesUploaded.length + fileList.filesReady.length
  if (CatchaUpload.maximumFileNumber) {
    if (filesNumber >= CatchaUpload.maximumFileNumber) {
      errors.push(new ErrorObj('Overflow.'))
    } 
  }
}