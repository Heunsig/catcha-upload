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
  
  const s3 = new AWS.S3({
    params: {
      Bucket: requirements.bucket
    }
  })

  loadstartHandler(null, fileStatusBar)

  s3.upload({
    Key: fileName,
    Body: file,
    ContentType: fileType,
    ACL: 'public-read'
  }, {
    partSize: 10 * 1024 * 1024,
    queueSize: 2
  })
  .on('httpUploadProgress', e => { progressHandler(e, fileStatusBar) })
  .send(e => { completeHandler(e, fileStatusBar) })
}