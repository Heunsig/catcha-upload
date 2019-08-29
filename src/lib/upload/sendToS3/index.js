import {
  loadstartHandler,
  progressHandler,
  completeHandler,
  errorHandler,
  abortHandler
} from './handlers'

export default (fileStatusBar, requirements) => {
  const file = fileStatusBar.file
  const fileName = file.name
  const fileType = file.type

  AWS.config.region = requirements.region
  AWS.config.credentials = new AWS.CognitoIdentityCredentials({
      IdentityPoolId: requirements.IdentityPoolId,
  });
  
  const params = {
    Bucket: requirements.bucket,
    Key: fileName,
    Body: file,
    ContentType: fileType,
    ACL: 'public-read'
  }

  const options = {
    partSize: 10 * 1024 * 1024,
    queueSize: 2
  }

  const s3 = new AWS.S3()

  loadstartHandler(fileStatusBar)

  s3.upload(params, options)
    .on('httpUploadProgress', progress => { progressHandler(progress, fileStatusBar) })
    .send((err, data) => { completeHandler(err, data, fileStatusBar) })
}