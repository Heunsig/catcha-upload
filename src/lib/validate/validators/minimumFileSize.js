import CatchaUpload from '../../catchaUpload'
import ErrorObj from '../error'

export default (file, errors) => {
  if (file.size < CatchaUpload.minimumFileSize) {
    errors.push(new ErrorObj('Less minimum file size.'))
  }
}