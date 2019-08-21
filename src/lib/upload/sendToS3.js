import awsSDK from 'aws-sdk'
import {
  loadstartHandler,
  progressHandler,
  completeHandler,
  errorHandler,
  abortHandler
} from './uploadHandlers'

export default (fileStatusBar, requirements) => {
  const file = fileStatusBar.file
  const fileName = file.name
  const fileType = file.type
  awsSDK.config.update({
    accessKeyId: requirements.accessKeyId,
    secretAccessKey: requirements.secretAccessKey,
    region: requirements.region
  })

  const s3 = new awsSDK.S3({
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
    partSize: 5000000,
    queueSize: 2
  })
  .on('httpUploadProgress', e => { progressHandler(e, fileStatusBar) })
  .send(e => { completeHandler(e, fileStatusBar) })
}