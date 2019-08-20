// import CatchaUpload from '../../catchaUpload'
import ErrorObj from '../error'

export default (catchaUpload, file, errors) => {
  console.log(catchaUpload)
  if (file.size > catchaUpload.maximumFileSize) {
    errors.push(new ErrorObj('Over maximum file size.')) 
  }
}
