// import CatchaUpload from '../../catchaUpload'
import ErrorObj from '../error'

export default (catchaUpload, totalFilesNum, errors) => {
  // let filesNumber = totalFilesNum.length + totalFilesNum.length
  if (catchaUpload.maximumFileNumber) {
    console.log('aaa', totalFilesNum)
    if (totalFilesNum >= catchaUpload.maximumFileNumber) {

      errors.push(new ErrorObj('Overflow.'))
    } 
  }
}