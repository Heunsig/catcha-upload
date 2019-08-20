// import CatchaUpload from '../../catchaUpload'
import ErrorObj from '../error'

export default (catchaUpload, file, errors) => {
  if (file.size < catchaUpload.minimumFileSize) {
    errors.push(new ErrorObj('Less minimum file size.'))
  }
}