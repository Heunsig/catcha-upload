import CatchaUpload from '../../catchaUpload'
import ErrorObj from '../error'

export default (file, errors) => {
  if (file.size > CatchaUpload.maximumFileSize) {
    errors.push(new ErrorObj('Over maximum file size.')) 
  }
}
